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

  module.exports.createUser = async (user) => {
    try {
      const email = user.email;
      const find = await User.findOne({ where: { email } });
      if (find) {
        throw new ErrorObject("email is already exists", 400);
      }
      await User.create(user);
      return await User.findOne({ where: { email } });
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500);
    }
  };