const mongoose = require("mongoose");
const validator = require("validator");

const BankAccountInfoSchema = new mongoose.Schema({
  account_name: { type: String, required: true },
  account_number: { type: String, required: true },
  bank_name: { type: String, required: true },
  bank_code: { type: String, required: true },
  recipient_code: { type: String },
  is_primary: { type: Boolean, default: false },
});

const DriverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: { type: String, required: true },
  wallet_balance: { type: Number, default: 0 },
  bank_accounts: [BankAccountInfoSchema],
});

module.exports = mongoose.model("Driver", DriverSchema);
