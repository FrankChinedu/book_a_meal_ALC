module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dateForMeal: {
        type: Sequelize.DATEONLY,
      },
      timeFrame: {
        type: Sequelize.ENUM,
        values: ['breakfast', 'lunch', 'dinner'],
      },
      mealId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Meals',
          key: 'id',
          as: 'mealId',
        },
      },
      cookId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'cookId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Menus');
  },
};
