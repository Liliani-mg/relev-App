const createHttpError = require("http-errors");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const bcrypt = require("../helpers/bcrypt.helper");
const { findAll, createUser, editUser, getUser, deleteOne } = require("../services/users.service");

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

  getOne: catchAsync(async (req, res, next) => {
    try {
      const response = await getUser(req.params.id);
    
      endpointResponse({
        res,
        message: "User retrieved successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving user] - [/:id - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),


  create: catchAsync(async (req, res, next) => {
    try {
      const user = req.body;
      user.password = await bcrypt.hash(req.body.password);
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
  deleteOne: catchAsync(async (req, res, next) => {
    try {
      const id = req.params.id;
      await deleteOne(id);
      endpointResponse({
        res,
        message: "User deleted successfully",
        code: 202,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting user] - [/:id - DELETE]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
