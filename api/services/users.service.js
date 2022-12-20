const { ErrorObject } = require("../helpers/error");
const { User } = require("../database/models");

exports.findAll = async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500);
    }
  };