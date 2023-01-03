"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Visits",
      [
        {
          userId: 2,
          date:new Date(),
          state: false,
        },
        {
          userId: 2,
          date:new Date(),
          state: true,
        },
        {
          userId: 2,
          date: new Date(),
          state: true,
        },
        {
          userId: 4,
          date:new Date(),
          state: true,
        },
        {
          userId: 3,
          date: new Date(),
          state: true,
        },
        {
          userId: 3,
          date: new Date(),
          state: true,
        },
        {
          userId: 3,
          date: new Date(),
          state: true,
        },
        {
          userId: 3,
          date:new Date(),
          state: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Visits", null, {});
  },
};
