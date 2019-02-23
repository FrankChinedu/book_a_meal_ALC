'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = await queryInterface.sequelize.query(
      'SELECT "id", "fullName" FROM "Users" AS "User";',
    );

    const cookId = users[0].id;

    return queryInterface.bulkInsert('Meals', [{
      name: 'beans and goat meat',
      price: 34,
      currency: 'NGN',
      cookId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'garri and egusi soup',
      price: 50,
      currency: 'NGN',
      cookId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {});
  },
};
