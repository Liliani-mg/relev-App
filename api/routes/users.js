const express = require("express");

const {
  get,
  create,
  editUser,
  getOne,
  deleteOne,
} = require("../controllers/users");
const {isAdmin, isSupervisor } = require("../middlewares/ownership");
const { name, email, password } = require("../schemas/user");
const validation = require("../middlewares/validation");

const router = express.Router();

router.post("/register", create);

router.get("/", get);
router.get("/:id", getOne);
router.put("/:id", editUser);
router.delete("/:id", isAdmin, deleteOne);


module.exports = router;
