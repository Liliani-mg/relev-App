const createHttpError = require("http-errors");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { findAll, createUser, editUser } = require("../services/users.service");

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await findAll();

      endpointResponse({
        res,
        message: "Users retrieved successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving users] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  create: catchAsync(async (req, res, next) => {
    try {
      const user = req.body;
     
      const response = await createUser(user);
   
      endpointResponse({
        res,
        message: "User created successfully",
        body: response,
        code: 201,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating user] - [POST]: ${error.message}`
      );
      next(httpError);
    }
  }),
  editUser: catchAsync(async (req, res, next) => {
    try {
      const id = req.params.id;
      const userData = req.body;
      await editUser(id, userData);
      endpointResponse({
        res,
        message: "User update successfully",
        code: 202,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating user] - [/:id - PUT]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
