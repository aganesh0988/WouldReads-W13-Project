'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    authorPic: DataTypes.STRING,
    born: DataTypes.STRING,
    died: DataTypes.STRING,
    biography: DataTypes.TEXT,
    website: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    Author.belongsToMany(models.Book, {
      through: 'authorBook',
      foreignKey: 'authorId',
      otherKey: 'bookId'
    });
  };
  return Author;
};
