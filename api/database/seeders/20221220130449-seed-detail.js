"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Details",
      [
        {
          visitId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          visitId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          visitId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          visitId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          visitId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
            
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Details", null, {});
  },
};
