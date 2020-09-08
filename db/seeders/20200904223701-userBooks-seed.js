'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userBooks', [
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userBooks', null, {})
  }
};
