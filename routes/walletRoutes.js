const express = require("express");
const walletController = require("../controllers/walletController");

const router = express.Router({ mergeParams: true });

router.get("/", walletController.getWalletBalance);
router.get("/transactions", walletController.getTransactions);
router.post("/withdraw", walletController.withdrawFromWallet);

module.exports = router;
