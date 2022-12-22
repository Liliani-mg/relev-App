
const { ErrorObject } = require("../helpers/error");
const { catchAsync } = require("../helpers/catchAsync");
const {User} = require ("../services/users.service");


exports.isAdmin = catchAsync(async (req, res, next) => {
  try {
    const user = await User.getUser(id);
    if (user.roleId === 1) return next();
    throw new ErrorObject("Not authorized", 403);
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
});

exports.isSupervisor = catchAsync(async (req, res, next) => {
  try {
    const user = await User.getUser(id);
    if (user.roleId === 3) return next();
    throw new ErrorObject("Not authorized", 403);
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
});
