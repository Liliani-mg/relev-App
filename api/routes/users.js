const express = require("express");
const { get, create, editUser, getOne } = require("../controllers/users");

const router = express.Router();

router.get("/", get);
router.get("/:id", getOne)
router.post("/", create);
router.put("/:id", editUser)

module.exports = router;
