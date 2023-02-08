"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        name: "Marge Simpson",
        roleId: 2,
        email: "marge@mail.com",
        password: "Hola1234",
        areaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "lisa Simpson",
        roleId: 2,
        email: "lisa@mail.com",
        password: "Hola1234",
        areaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maggie Simpson",
        roleId: 3,
        email: "maggie@mail.com",
        password: "Hola1234",
        areaId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Milhouse Van Houten",
        roleId: 3,
        email: "milhouse@mail.com",
        password: "Hola1234",
        areaId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];
    return await queryInterface.bulkInsert("Users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  },
};