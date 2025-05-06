const paystackController = require("../controllers/paystackController");
const express = require("express");
const router = express.Router();

router.post("/api/paystack/webhook", paystackController.handlePaystackWebhook);

module.exports = router;
