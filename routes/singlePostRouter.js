const express = require("express");
const router = express.Router();

const singlePostController = require("../controller/singlePostController");

router.get("/:id", singlePostController.getSinglePost);

module.exports = router;
