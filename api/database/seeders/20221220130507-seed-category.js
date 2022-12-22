"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Casa Principal",
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ExAgroinsumos',
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Taller',
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hangar',
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hangar Oficina',
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Balanza',
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Agroinsumos',
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Camaras',
          description: null,
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
