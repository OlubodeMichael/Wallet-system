const mongoose = require("mongoose");

const PlatformEarningsSchema = new mongoose.Schema({
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  source_transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
    required: true,
  },
  description: {
    type: String,
    default: "Commission",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("PlatformEarnings", PlatformEarningsSchema);
