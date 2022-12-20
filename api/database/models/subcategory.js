const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subcategory.hasMany(models.Inspection)
      Subcategory.belongsTo(models.Category, {foreignKey: 'categoryId'})
    }
  };
  Subcategory.init({
    id: {
      type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:true,
    modelName: 'Subcategory',
  });
  return Subcategory;
};