'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bookGenres', [
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bookGenres', null, {})
  }
};
