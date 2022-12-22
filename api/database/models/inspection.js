'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inspection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inspection.belongsTo(models.Visit)
      Inspection.hasMany(models.Category, {foreignKey: 'categoryId'})
      Inspection.hasMany(models.Subcategory, {foreignKey: 'subcategoryId'})
    }
  };
  Inspection.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    //visitId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    subcategoryId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    response: { type: DataTypes.BOOLEAN, defaultValue: false},
    observation: DataTypes.TEXT,
  }, {
    sequelize,
    timestamps:true,
    modelName: 'Area',
  });
  return Inspection;
};