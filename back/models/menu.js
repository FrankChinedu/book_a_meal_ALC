module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    dateForMeal: DataTypes.DATEONLY,
    timeFrame: DataTypes.ENUM,
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
    Menu.hasMany(models.Meal, {
      foreignKey: 'mealId',
    });
    Menu.belongsTo(models.User, {
      foreignKey: 'cookId',
    });
  };
  return Menu;
};
