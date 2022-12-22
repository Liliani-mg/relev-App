const express = require("express");
const usersRouter = require("./users");
const visitRouter = require("./visits")
const authRouter = require("./auth");
const router = express.Router();

// example of a route with index controller get function
router.use("/users", usersRouter);
router.use("/visits", visitRouter);
router.use("/auth", authRouter);


module.exports = router;
