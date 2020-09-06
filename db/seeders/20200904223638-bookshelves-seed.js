'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookshelves', [
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookshelves', null, {})
  }
};
