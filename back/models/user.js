import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: DataTypes.STRING,
  },
  {});
  User.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });
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
