const express = require("express");
const morgan = require("morgan");

const walletRoutes = require("./routes/walletRoutes");
const paystackRoutes = require("./routes/paystackRoutes");
const driverRoutes = require("./routes/driverRoute");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", paystackRoutes);
app.use("/api", driverRoutes);

module.exports = app;
