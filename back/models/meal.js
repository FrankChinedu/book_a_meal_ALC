module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    currency: DataTypes.STRING,
  }, {});
  Meal.associate = (models) => {
    // associations can be defined here
    Meal.belongsTo(models.User, { as: 'cook' });
  };
  return Meal;
};
