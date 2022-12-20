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
      Inspection.belongsTo(models.Subcategory, {foreignKey: 'subcategoryId'})
      
    }
  };
  Inspection.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    state: { type: DataTypes.STRING, defaultValue: 'NO'},
    observations: DataTypes.TEXT,
    image: DataTypes.STRING,
    subcategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:true,
    modelName: 'Inspection',
  });
  return Inspection;
};