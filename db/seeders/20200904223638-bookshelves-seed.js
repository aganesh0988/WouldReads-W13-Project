'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookshelves', [
      {shelfName: "Business", createdAt: new Date(), updatedAt: new Date()},
      {shelfName: "School Books", createdAt: new Date(), updatedAt: new Date()},
      {shelfName: "Classics", createdAt: new Date(), updatedAt: new Date()},
      {shelfName: "Self Help Books", createdAt: new Date(), updatedAt: new Date()},
      {shelfName: "Favorite Novels", createdAt: new Date(), updatedAt: new Date()},
      {shelfName: "None", createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookshelves', null, {})
  }
};
