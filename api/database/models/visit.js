'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Visit.belongsTo(models.User, { foreignKey:'userId' });
      //Visit.hasOne(models.Inspection);
    }
  };
  Visit.init({
    userId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    state: {type: DataTypes.BOOLEAN, defaultValue: false },
    location: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Visit',
  });
  return Visit;
};