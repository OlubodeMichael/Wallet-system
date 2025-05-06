const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  last_updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Wallet", WalletSchema);
