const createHttpError = require("http-errors");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { getByEmail } = require("../services/users.service");
const bcrypt = require("../helpers/bcrypt.helper");

module.exports = {
  login: catchAsync(async (req, res, next) => {
    try {
      const user = req.body;
      const logUser = await getByEmail(user.email);
      const match = await bcrypt.compare(user.password, logUser.password);
      if (!match) endpointResponse({ res, body: { ok: false } });
      delete logUser.dataValues.password;
      const response = logUser;
      endpointResponse({
        res,
        message: "Authenticated successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error trying to authenticate user] - [/auth/login - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
