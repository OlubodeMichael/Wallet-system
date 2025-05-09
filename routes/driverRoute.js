const express = require("express");
const router = express.Router();
const walletRoutes = require("./walletRoutes");
const driverController = require("../controllers/driverController");

// Driver routes
router.post("/drivers", driverController.createDriver);

// Wallet routes
router.use("/drivers/:driverId/wallet", walletRoutes);

// Bank account routes
router
  .route("/drivers/:driverId/bank-accounts")
  .post(driverController.addBankAccount)
  .get(driverController.getBankAccounts);

// Bank account routes
router
  .route("/drivers/:driverId/bank-accounts/:bankAccountId")
  .get(driverController.getBankAccount);

module.exports = router;
