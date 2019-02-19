module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      size: {
        type: Sequelize.STRING,
      },
      customer_id: {
        type: Sequelize.INTEGER,
      },
      mealId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Meal',
          key: 'id',
          as: 'mealId',
        },
      },
      cookId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
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
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  },
};
