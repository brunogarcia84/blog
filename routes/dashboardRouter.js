const express = require("express");
const router = express.Router();

const dashboardController = require("../controller/dashboardController");
const adminController = require("../controller/adminController");

router.get("/", dashboardController.getDashboard);
router.post("/add-post", dashboardController.createNewPost);

module.exports = router;
