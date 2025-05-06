const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true,
  },
  type: {
    type: String,
    enum: ["deposit", "withdrawal", "commission", "earning", "adjustment"],
    required: true,
  },
  direction: {
    type: String,
    enum: ["credit", "debit"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  balance_after: {
    type: Number,
    required: true,
  },
  reference: {
    type: String, // e.g. Paystack reference or internal ref
    default: null,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "success",
  },
  description: {
    type: String,
    default: "",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
