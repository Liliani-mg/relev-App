
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
     {
      name: 'User Admin',
      roleId: 1,
      email: 'admin@mail.com',
      password: 'Hola1234',
      areaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
