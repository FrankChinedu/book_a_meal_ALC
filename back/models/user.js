
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Meal, { onDelete: 'CASCADE' });
    User.hasMany(models.Menu, { onDelete: 'CASCADE' });
    User.hasMany(models.Order, { onDelete: 'CASCADE' });
    User.belongsToMany(models.Role, {
      through: 'user_roles',
      foreignKey: 'userId',
      otherKey: 'roleId',
    });
  };
  return User;
};
