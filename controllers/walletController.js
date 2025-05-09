const AppError = require("../utils/appError");
const Driver = require("../models/Driver");
const catchAsync = require("../utils/catchAsync");
const PlatformEarning = require("../models/PlatformEarnings");
const walletService = require("../services/walletService");

exports.getWalletBalance = catchAsync(async (req, res, next) => {
  const { driverId } = req.params;

  const driver = await Driver.findById(driverId);

  if (!driver) {
    return next(new AppError("Driver not found", 404));
  }

  const balance = await walletService.getWalletBalance(driverId);

  res.status(200).json({
    status: "success",
    data: {
      balance,
    },
  });
});

exports.withdrawFromWallet = catchAsync(async (req, res, next) => {
  const { driverId } = req.params;

  const { amount } = req.body;

  const driver = await Driver.findById(driverId);

  if (!driver) {
    return next(new AppError("Driver not found", 404));
  }

  const balance = await walletService.getWalletBalance(driverId);

  if (balance < amount) {
    return next(new AppError("Insufficient balance", 400));
  }

  const transfer = await walletService.debitWallet(driverId, amount);

  res.status(200).json({
    status: "success",
    data: {
      transfer,
    },
  });
});
