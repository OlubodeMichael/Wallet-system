const paystackController = require("../controllers/paystackController");
const express = require("express");
const router = express.Router();

router.post("/paystack/webhook", paystackController.handlePaystackWebhook);

module.exports = router;
