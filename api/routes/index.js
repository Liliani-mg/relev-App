const express = require("express");
const usersRouter = require("./users");
const visitRouter = require("./visits")
const inspectionRouter = require("./inspection")
const authRouter = require("./auth");
const imageRoutes = require("../services/image");
const router = express.Router();

// example of a route with index controller get function
router.use('/image', imageRoutes);
router.use("/users", usersRouter);
router.use("/visits", visitRouter);
router.use("/inspection", inspectionRouter);

router.use("/auth", authRouter);

module.exports = router;
