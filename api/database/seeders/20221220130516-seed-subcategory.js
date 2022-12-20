"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Subcategories",
      [
        {
          name: 'Rack Principal (limpieza) - FOTO',
          categoryId: 1,
        },
        {
          name: 'Rack Principal (Orden)- FOTO',
          categoryId: 1,
        },
        {
          name: 'Funcionamiento AP',
          categoryId: 1,
        },
        {
          name: 'Funcionamiento teléfono',
          categoryId: 1,
        },
        {
          name: 'UPS',
          categoryId: 1,
        },
        //----------------------------------------
        {
          name: 'Rack Principal (limpieza)-  FOTO',
          categoryId: 2,
        },
        {
          name: 'Rack Principal (orden) - FOTO',
          categoryId: 2,
        },
        {
          name: 'Funcionamiento AP',
          categoryId: 2,
        },
        //-------------------------------------
        {
          name: 'Rack Principal (limpieza) - FOTO',
          categoryId: 3,
        },
        {
          name: 'Rack Principal (orden) - FOTO',
          categoryId: 3,
        },
        {
          name: 'Funcionamiento telefono',
          categoryId: 3,
        },
        {
          name: 'Funcionamiento AP',
          categoryId: 3,
        },
//----------------------------------------------
        {
          name: 'Rack Principal (limpieza) - FOTO',
          categoryId: 4,
        },
        {
          name: 'Rack Principal (orden) - FOTO',
          categoryId: 4,
        },
        {
          name: 'Funcionamiento telefono',
          categoryId: 4,
        },
        {
          name: 'Funcionamiento AP',
          categoryId: 4,
        },
        //----------
        {
          name: 'Limpiar PC - FOTO',
          categoryId: 5,
        },
        {
          name: 'Acomodar cables - FOTO',
          categoryId: 5,
        },
        {
          name: 'Funcionamiento telefono',
          categoryId: 5,
        },
        //------------------------------
        {
          name: 'Rack Principal (limpieza) - FOTO',
          categoryId: 6,
        },
        {
          name: 'Rack Principal (orden) - FOTO',
          categoryId: 6,
        },
        {
          name: 'Funcionamiento telefono',
          categoryId: 6,
        },
        {
          name: 'Funcionamiento AP',
          categoryId: 6,
        },
        {
          name: 'Limpiar PC - FOTO',
          categoryId: 6,
        },
        {
          name: 'UPS',
          categoryId: 6,
        },
        //---------------------------
        {
          name: 'Funcionamiento AP',
          categoryId: 7,
        },
        //------------------------
        {
          name: 'Chequear visualización',
          categoryId: 8,
        },
       
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Subcategories', null, {});
     
  },
};
