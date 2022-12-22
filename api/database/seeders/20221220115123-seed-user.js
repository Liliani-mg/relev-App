
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      name: 'Jose Balcarce',
      roleId: 2,
      email: 'joseb@mail.com',
      password: 'Hola1234',
      areaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'User Admin',
      roleId: 1,
      email: 'admin@mail.com',
      password: 'Hola1234',
      areaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Juan Gomez',
      roleId:3,
      email: 'juang@mail.com',
      password: 'Hola1234',
      areaId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alan Alameda',
      roleId: 2,
      email: 'alan@mail.com',
      password: 'Hola1234',
      areaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Roberto Robles',
      roleId: 2,
      email: 'rob@mail.com',
      password: 'Hola1234',
      areaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rosa Rosales',
      roleId: 2,
      email: 'rosar@mail.com',
      password: 'Hola1234',
      areaId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Andres Almada',
      roleId: 2,
      email: 'andresal@mail.com',
      password: 'Hola1234',
      areaId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
