"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Visit, { through: "User_Visit" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      rol: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      team: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: "User",
    }
  );
  return User;
};
