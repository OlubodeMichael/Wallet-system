const express = require("express");
const router = express.Router();

router.post("/create-transfer-recipient", (req, res) => {
  console.log("Webhook received:", req.body); // Log the payload
  res.sendStatus(200); // Respond so Paystack doesn't retry
});

module.exports = router;
