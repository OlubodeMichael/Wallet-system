const Driver = require("./../models/Driver");
const Transaction = require("./../models/Transactions");
const PlatformEarning = require("./../models/PlatformEarnings");
const paystackService = require("./../services/paystackService");

exports.creditWallet = async (driverId, amount, reference) => {
  const driver = await Driver.findById(driverId);
  if (!driver) {
    throw new Error("Driver not found");
  }

  // Prevent double-crediting
  const existingDeposit = await Transaction.findOne({
    reference,
    type: "deposit",
  });
  if (existingDeposit) {
    console.log("🛑 Already processed deposit for reference:", reference);
    return driver;
  }

  // Commission and net earnings
  const netAmount = amount * 0.9;
  const commission = amount * 0.1;

  // Calculate new platform earnings balance
  const lastEarning = await PlatformEarning.findOne().sort({ created_at: -1 });
  const previousBalance = lastEarning ? lastEarning.balance_after : 0;
  const newBalance = previousBalance + commission;

  // Update driver wallet
  driver.wallet_balance += netAmount;
  await driver.save();

  // Log deposit transaction
  await Transaction.create({
    driver: driverId,
    type: "deposit",
    direction: "credit",
    amount,
    reference,
    balance_after: driver.wallet_balance,
  });

  // Log commission transaction
  const commissionTxn = await Transaction.create({
    driver: driverId,
    type: "commission",
    direction: "debit",
    amount: commission,
    reference,
    balance_after: driver.wallet_balance,
  });

  // Log platform earnings
  await PlatformEarning.create({
    driver: driverId,
    amount: commission,
    reference,
    source_transaction: commissionTxn._id,
    balance_after: newBalance,
  });

  return driver;
};

exports.debitWallet = async (driverId, amount) => {
  const driver = await Driver.findById(driverId);

  if (!driver) {
    throw new Error("Driver not found");
  }

  if (driver.wallet_balance < amount) {
    throw new Error("Insufficient balance");
  }

  // Get primary bank account
  const primaryAccount = driver.bank_account_info.find((acc) => acc.is_primary);
  if (!primaryAccount || !primaryAccount.recipient_code) {
    throw new Error("No valid primary bank account with recipient code");
  }

  // Initiate transfer
  const transfer = await paystackService.initiateTransfer({
    amount,
    reason: "Wallet withdrawal",
    recipient_code: primaryAccount.recipient_code,
    driverId: driver._id,
  });

  const paystackRef = transfer.data.reference;

  // Verify transfer
  const transferResponse = await paystackService.verifyTransfer(paystackRef);

  if (transferResponse.data.status !== "success") {
    throw new Error("Transfer failed");
  }

  // Deduct from wallet
  driver.wallet_balance -= amount;
  await driver.save();

  // Log transaction
  await Transaction.create({
    driver: driverId,
    type: "withdrawal",
    direction: "debit",
    amount,
    reference: paystackRef,
    balance_after: driver.wallet_balance,
  });

  return driver;
};

exports.getWalletBalance = async (driverId) => {
  const driver = await Driver.findById(driverId);

  if (!driver) {
    throw new Error("Driver not found");
  }

  return driver.wallet_balance;
};
