'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Roles', [
      {
        name: 'ADMIN',
        description: 'Admin can view and edit all',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'USER',
        description: 'User can register, add new visit and edit it',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'SUPERVISOR',
        description: 'User is available to view all visits',
        createdAt: new Date(),
      updatedAt: new Date()
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Roles', null, {});
     
  }
};
