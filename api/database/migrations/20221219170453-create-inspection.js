'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inspections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      visitId:{
        type: Sequelize.INTEGER,
        references: {model: 'visits', key: 'id'}
      },
      categoryId:{
        type: Sequelize.INTEGER,
        references: {model: 'categories', key: 'id'}
      },
      subcategoryId:{
        type: Sequelize.INTEGER,
        references: {model: 'subcategories', key: 'id'}
      },
      image: Sequelize.STRING,
      response: Sequelize.BOOLEAN,
      observation: Sequelize.TEXT,
      
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Inspections');
  }
};