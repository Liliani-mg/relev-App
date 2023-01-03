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
      Subcategory.belongsToMany(models.Category,{through: 'Category_Subcategory'})
      Subcategory.belongsTo(models.Inspection)
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
    description: DataTypes.TEXT
  }, {
    sequelize,
    timestamps:true,
    modelName: 'Subcategory',
  });
  return Subcategory;
};