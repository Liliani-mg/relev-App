"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Visit);
      User.belongsTo(models.Role, {foreignKey: 'roleId'});
      User.belongsTo(models.Area, {foreignKey: 'areaId'});

    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      areaId: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
   },
    {
      sequelize,
      timestamps: true,
      modelName: "User",
    }
  );
  return User;
};
