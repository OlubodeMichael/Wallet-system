const express = require("express");
const walletController = require("../controllers/walletController");
const router = express.Router({ mergeParams: true });

router.get("/", walletController.getWalletBalance);

module.exports = router;
