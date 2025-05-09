const express = require("express");
const router = express.Router();
const walletRoutes = require("./walletRoutes");
const driverController = require("../controllers/driverController");
const bankController = require("../controllers/bankController");

// Driver routes
router.post("/drivers", driverController.createDriver);

// Wallet routes
router.use("/drivers/:driverId/wallet", walletRoutes);

// Drivers routes
router.get("/drivers/:driverId", driverController.getDriver);

// Bank account routes
router
  .route("/drivers/:driverId/bank-accounts")
  .post(bankController.addBankAccount)
  .get(bankController.getBankAccounts);

// Bank account routes
router
  .route("/drivers/:driverId/bank-accounts/:bankAccountId")
  .get(bankController.getBankAccount);

module.exports = router;
