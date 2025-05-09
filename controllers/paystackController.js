const walletService = require("./../services/walletService");
const Driver = require("./../models/Driver");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.handlePaystackWebhook = catchAsync(async (req, res, next) => {
  const { event, data } = req.body;
  console.log(data);

  // 1. Validate event
  if (event !== "charge.success") {
    return next(new AppError("Invalid event", 400));
  }

  // ✅ Acknowledge Paystack FIRST
  res.sendStatus(200);

  // 2. Now handle the payment logic in the background
  const amount = data.amount / 100;
  const email = data.customer.email;
  const reference = data.reference;

  const driver = await Driver.findOne({ email });
  if (!driver) return;

  await walletService.creditWallet(driver._id, amount, reference);
});
