'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Areas', [
      {
        name: 'TELECOMUNICACIONES',
        description: 'Area description',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'MICROINFORMATICA',
        description: 'Area description',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Areas', null, {});
     
  }
};
