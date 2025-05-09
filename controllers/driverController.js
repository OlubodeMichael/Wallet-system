const Driver = require("../models/Driver");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const paystackService = require("./../services/paystackService");

exports.createDriver = catchAsync(async (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return next(new AppError("Name, email, and phone are required", 400));
  }
  const newDriver = await Driver.create({ name, email, phone });

  if (!newDriver) {
    return next(new AppError("Failed to create driver", 400));
  }

  res.status(201).json({
    status: "success",
    data: {
      driver: newDriver,
    },
  });
});

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
  driver.bank_account_info.push({
    account_name,
    account_number,
    bank_code,
    recipient_code,
    is_primary: driver.bank_account_info.length === 0, // First one is primary
  });

  await driver.save();

  res.status(200).json({
    status: "success",
    data: {
      bankAccounts: driver.bank_account_info,
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
