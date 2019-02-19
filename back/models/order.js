module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    quantity: DataTypes.INTEGER,
    size: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
  }, {});
  Order.associate = (models) => {
    // associations can be defined here
    Order.hasMany(models.Meal, {
      foreignKey: 'mealId',
    });
    Order.belongsTo(models.User, {
      foreignKey: 'cookId',
    });
  };
  return Order;
};
