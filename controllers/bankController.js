const Driver = require("../models/Driver");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const paystackService = require("../services/paystackService");

exports.addBankAccount = catchAsync(async (req, res, next) => {
  const { driverId } = req.params;
  const { account_number, bank_code } = req.body;

  const driver = await Driver.findById(driverId);
  if (!driver) return next(new AppError("Driver not found", 404));

  // Get driver name to use as account_name
  const account_name = driver.name;

  // Create transfer recipient via Paystack
  const recipient_code = await paystackService.createTransferRecipient({
    name: account_name,
    account_number,
    bank_code,
  });

  // Save to driver's bank_account_info array
  driver.bank_accounts.push({
    account_name,
    account_number,
    bank_code,
    recipient_code,
    is_primary: driver.bank_accounts.length === 0, // First one is primary
  });

  await driver.save();

  res.status(200).json({
    status: "success",
    data: {
      bankAccounts: driver.bank_accounts,
    },
  });
});

exports.getBankAccounts = catchAsync(async (req, res, next) => {
  const { driverId } = req.params;

  const driver = await Driver.findById(driverId);

  if (!driver) {
    return next(new AppError("Driver not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      bankAccounts: driver.bank_accounts,
    },
  });
});

exports.getBankAccount = catchAsync(async (req, res, next) => {
  // Get driver and bank account id from params
  const { driverId, bankAccountId } = req.params;

  // Find driver
  const driver = await Driver.findById(driverId);

  if (!driver) {
    return next(new AppError("Driver not found", 404));
  }

  // Find bank account by id
  const bankAccount = driver.bank_accounts.id(bankAccountId);

  if (!bankAccount) {
    return next(new AppError("Bank account not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      bankAccount,
    },
  });
});

exports.setPrimaryBankAccount = catchAsync(async (req, res, next) => {
  const { driverId, bankAccountId } = req.params;

  const driver = await Driver.findById(driverId);
  if (!driver) return next(new AppError("Driver not found", 404));

  let found = false;

  driver.bank_accounts.forEach((bankAccount) => {
    if (bankAccount._id.toString() === bankAccountId) {
      bankAccount.is_primary = true;
      found = true;
    } else {
      bankAccount.is_primary = false;
    }
  });

  if (!found) {
    return next(new AppError("Bank account not found", 404));
  }

  await driver.save();

  res.status(200).json({
    status: "success",
    message: "Primary bank account updated",
    data: {
      bank_accounts: driver.bank_accounts,
    },
  });
});
