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
      name:{
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.ENUM('SI', 'NO')
      },
      observations: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      subcategoryId: {
        type: Sequelize.INTEGER,
        references: { model: "subcategories", key: "id" },
      },
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