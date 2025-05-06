const express = require("express");
const walletRoutes = require("./routes/walletRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/paystack/webhook", walletRoutes);

module.exports = app;
