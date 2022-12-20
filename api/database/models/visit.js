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
      Visit.belongsToMany(models.User, { through: 'User_Visit', foreignKey:{name: 'userId'} });
      Visit.belongsTo(models.Detail);
    }
  };
  Visit.init({
    userId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    state: {type: DataTypes.BOOLEAN, defaultValue: false },
   
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Visit',
  });
  return Visit;
};