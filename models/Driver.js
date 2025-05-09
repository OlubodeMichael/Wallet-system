const mongoose = require("mongoose");
const validator = require("validator");

const BankAccountInfoSchema = new mongoose.Schema({
  account_name: { type: String, required: true },
  account_number: { type: String, required: true },
  bank_name: { type: String, required: true },
  bank_code: { type: String, required: true },
  recipient_code: { type: String },
  is_primary: {
    type: Boolean,
    default: false,
    index: true, // allows fast query if you want to get the primary one
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const DriverSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone: { type: String, required: true },
    wallet_balance: { type: Number, default: 0 },
    bank_accounts: [BankAccountInfoSchema],
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("Driver", DriverSchema);
