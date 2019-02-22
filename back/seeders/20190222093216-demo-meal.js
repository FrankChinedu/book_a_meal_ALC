'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // const users = await queryInterface.sequelize.query(
    //   'SELECT id from User where email="demo@demo.com";',
    // );

    // const userId = users[0].id;

    return queryInterface.bulkInsert('Meals', [{
      name: 'beans and goat meat',
      price: 34,
      currency: 'NGN',
      cookId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'garri and egusi soup',
      price: 50,
      currency: 'NGN',
      cookId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {});
  },
};
