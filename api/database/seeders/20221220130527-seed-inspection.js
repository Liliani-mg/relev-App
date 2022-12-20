'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Inspections', [
      {
      state: 'SI',
      observations: null,
      image: 'image.jpg',
      subcategoryId: 1
     },
     {
      state: 'SI',
      observations: null,
      image: 'image.jpg',
      subcategoryId: 2
     },
     {
      state: 'SI',
      observations: null,
      image: null,
      subcategoryId: 3
     },
     {
      state: 'SI',
      observations: null,
      image: 'image.jpg',
      subcategoryId: 4
     },
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Inspections", null, {});
  }
};
