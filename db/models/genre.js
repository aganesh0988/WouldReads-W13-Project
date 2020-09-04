'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    genreName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Genre.associate = function(models) {
    Genre.belongsToMany(models.Book, {
      through: 'book-genre',
      otherKey: 'bookId',
      foreignKey: 'genreId'})
  };
  return Genre;
};
