const express = require("express");
const { createInspection } = require("../controllers/inspection");
const router = express.Router();

router.post("/create",  createInspection);

module.exports = router;
