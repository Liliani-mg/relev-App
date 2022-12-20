"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Casa Principal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ExAgroinsumos',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Taller',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hangar',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hangar Oficina',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Balanza',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Agroinsumos',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Camaras',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Categories", null, {});
  },
};
