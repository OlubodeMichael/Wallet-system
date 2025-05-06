const Driver = require("../models/Driver");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

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
