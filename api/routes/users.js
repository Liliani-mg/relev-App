const express = require("express");
const { get, create, editUser, getOne, deleteOne} = require("../controllers/users");

const router = express.Router();

router.post("/", create);
router.get("/", get);
router.get("/:id", getOne)
router.put("/:id", editUser)
router.delete("/:id", deleteOne)

module.exports = router;
