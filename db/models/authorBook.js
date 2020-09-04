'use strict';
module.exports = (sequelize, DataTypes) => {
  const authorBook = sequelize.define('authorBook', {
    authorId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});
  authorBook.associate = function(models) {
    authorBook.belongsTo(models.Author, {foreignKey: 'authorId'});
    authorBook.belongsTo(models.Book, {foreignKey: 'bookId'});
  };
  return authorBook;
};
