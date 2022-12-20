
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      name: 'Jose Balcarce',
      rol: 'USER',
      email: 'joseb@mail.com',
      password: 'Hola1234',
      team: 'TELECOMUNICACIONES',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'User Admin',
      rol: 'ADMIN',
      email: 'admin@mail.com',
      password: 'Hola1234',
      team: 'TELECOMUNICACIONES',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Juan Gomez',
      rol: 'USER',
      email: 'juang@mail.com',
      password: 'Hola1234',
      team: 'MICROINFORMATICA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alan Alameda',
      rol: 'USER',
      email: 'alan@mail.com',
      password: 'Hola1234',
      team: 'MICROINFORMATICA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Roberto Robles',
      rol: 'USER',
      email: 'rob@mail.com',
      password: 'Hola1234',
      team: 'MICROINFORMATICA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rosa Rosales',
      rol: 'USER',
      email: 'rosar@mail.com',
      password: 'Hola1234',
      team: 'TELECOMUNICACIONES',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Andres Almada',
      rol: 'USER',
      email: 'andresal@mail.com',
      password: 'Hola1234',
      team: 'MICROINFORMATICA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
