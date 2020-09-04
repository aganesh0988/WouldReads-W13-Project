'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookGenre = sequelize.define('bookGenre', {
    genreId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});
  bookGenre.associate = function(models) {
    bookGenre.belongsTo(models.Genre, {foreignKey: 'genreId'});
    bookGenre.belongsTo(models.Book, {foreignKey: 'bookId'});
  };
  return bookGenre;
};
