'use strict';
module.exports = (sequelize, DataTypes) => {
  const userBook = sequelize.define('userBook', {
    dateRead: DataTypes.DATE,
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    bookshelfId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {});
  userBook.associate = function(models) {
    userBook.belongsTo(models.User, {foreignKey: 'userId'}),
    userBook.belongsTo(models.Bookshelf, {foreignKey: 'bookshelfId'}),
    userBook.belongsTo(models.Book, {foreignKey: 'bookId'}),
    userBook.belongsTo(models.Status, {foreignKey: 'statusId'})

  };
  return userBook;
};
