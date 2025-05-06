const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driverController");

router.post("/driver", driverController.createDriver);

module.exports = router;
