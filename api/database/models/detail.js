"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Detail.hasMany(models.Category);
  Detail.belongsTo(models.Visit, {foreignKey: 'visitId'})
    }
  }
  Detail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
   visitId: DataTypes.INTEGER
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Detail",
    }
  );
  return Detail;
};
