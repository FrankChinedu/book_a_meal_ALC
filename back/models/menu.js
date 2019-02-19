module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    dateForMeal: DataTypes.DATEONLY,
    timeFrame: DataTypes.ENUM,
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
    Menu.hasMany(models.Meal);
    Menu.belongsTo(models.User);
  };
  return Menu;
};
