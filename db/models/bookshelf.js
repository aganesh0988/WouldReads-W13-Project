'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    shelfName: DataTypes.STRING
  }, {});
  Bookshelf.associate = function(models) {
    Bookshelf.hasMany(models.userBook, {foreignKey: 'bookshelfId'})
  };
  return Bookshelf;
};
