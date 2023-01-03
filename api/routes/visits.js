const express = require("express");
const { get, create, editVisit, getOne, getOneVisit, getUserVisitOpen} = require("../controllers/visits");

const router = express.Router();

router.post("/", create);
router.get("/", get);
router.get("/panelUser", getOneVisit)
router.get("userVisit", getUserVisitOpen)
router.get("/:id", getOne)
router.put("/:id", editVisit)

module.exports = router;
