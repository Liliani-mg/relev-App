"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Subcategories",
      [
        {
          name: 'Rack Principal (limpieza) - FOTO',
          description: null,
       },
        {
          name: 'Rack Principal (Orden)- FOTO',
          description: null,
        },
        {
          name: 'Funcionamiento AP',
          description: null,
        },
        {
          name: 'Funcionamiento teléfono',
          description: null,
        },
        {
          name: 'UPS',
          description: null,
        },
        //----------------------------------------
        // {
        //   name: 'Rack Principal (limpieza)-  FOTO',
        //   description: null,
        // },
        // {
        //   name: 'Rack Principal (orden) - FOTO',
        //   description: null,
        // },
        // {
        //   name: 'Funcionamiento AP',
        //   description: null,
        // },
        //-------------------------------------
        // {
        //   name: 'Rack Principal (limpieza) - FOTO',
        //   description: null,
        // },
        // {
        //   name: 'Rack Principal (orden) - FOTO',
        //   description: null,
        // },
        // {
        //   name: 'Funcionamiento telefono',
        //   description: null,
        // },
        // {
        //   name: 'Funcionamiento AP',
        //   description: null,
        // },
//----------------------------------------------
        // {
        //   name: 'Rack Principal (limpieza) - FOTO',
        //   description: null,
        // },
        // {
        //   name: 'Rack Principal (orden) - FOTO',
        //   description: null,
        // },
        // {
        //   name: 'Funcionamiento telefono',
        //   description: null,
        // },
        // {
        //   name: 'Funcionamiento AP',
        //   description: null,
        // },
        //----------
        {
          name: 'Limpiar PC - FOTO',
          description: null,
        },
        {
          name: 'Acomodar cables - FOTO',
          description: null,
        },
        // {
        //   name: 'Funcionamiento telefono',
        //   description: null,
        // },
        //------------------------------
        // {
        //   name: 'Rack Principal (limpieza) - FOTO',
        //   description: null,
        // },
        // {
        //   name: 'Rack Principal (orden) - FOTO',
        //   description: null,
        // },
        // {
        //   name: 'Funcionamiento telefono',
        //   description: null,
        // },
        // {
        //   name: 'Funcionamiento AP',
        //   description: null,
        // },
        // {
        //   name: 'Limpiar PC - FOTO',
        //   description: null,
        // },
        // {
        //   name: 'UPS',
        //   description: null,
        // },
        // //---------------------------
        // {
        //   name: 'Funcionamiento AP',
        //   description: null,
        // },
        //------------------------
        {
          name: 'Chequear visualización',
          description: null,
        },
       
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Subcategories', null, {});
     
  },
};
