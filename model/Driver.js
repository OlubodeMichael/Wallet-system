const mongoose = require("mongoose");

const BankAccountInfoSchema = new mongoose.Schema({
  account_name: { type: String, required: true },
  account_number: { type: String, required: true },
  bank_name: { type: String, required: true },
  bank_code: { type: String, required: true },
  recipient_code: { type: String },
  //is_verified: { type: Boolean, default: false },
});

const DriverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  phone: { type: String },
  wallet_balance: { type: Number, default: 0 },
  bank_account_info: BankAccountInfoSchema,
});

module.exports = mongoose.model("Driver", DriverSchema);
