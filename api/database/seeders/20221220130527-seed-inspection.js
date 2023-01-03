'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Inspections', [
      {
      visitId: 1,
      categoryId: 1,
      subcategoryId: 1,
      observation: null,
      image: 'image.jpg',
      response: true,

     },
     {
       visitId: 1,
      categoryId: 1,
      subcategoryId: 2,
      observation: null,
      image: 'image.jpg',
      response: true,
      
     },
     {
      visitId: 1,
      categoryId: 1,
      subcategoryId: 3,
      observation: null,
      image: null,
      response: true,
      
     },
     {
      visitId: 1,
      categoryId: 1,
      subcategoryId: 4,
      observation: null,
      image: null,
      response: true,
      
     },
     {
      visitId: 1,
      categoryId: 1,
      subcategoryId: 5,
      observation: null,
      image: null,
      response: true,
      
     },
     //------------------
     {
      visitId: 1,
      categoryId: 2,
      subcategoryId: 1,
      observation: null,
      image: 'image.jpg',
      response: true,

     },
     {
       visitId: 1,
      categoryId: 2,
      subcategoryId: 2,
      observation: null,
      image: 'image.jpg',
      response: true,
      
     },
     {
     visitId: 1,
      categoryId: 2,
      subcategoryId: 3,
      observation: null,
      image: null,
      response: true,
      
     },
   
 
    ], {});
   
  },

  
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Inspections", null, {});
  }
};
