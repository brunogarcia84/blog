const express = require("express");
const router = express.Router();

const adminController = require("../controller/adminController");

router.get("/", adminController.getAdminPage);
router.post("/login", adminController.loginToAccount);
router.post("/register", adminController.registerNewAccount);

module.exports = router;
