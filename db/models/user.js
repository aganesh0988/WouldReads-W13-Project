'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING.BINARY
  }, {});
  User.associate = function(models) {
    User.hasMany(models.userBook,{foreignKey: 'userId'}),
    User.hasMany(models.Review,{foreignKey:'userId'})
  };
  return User;
};
