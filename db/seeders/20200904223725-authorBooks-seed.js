'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authorBooks', [
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('authorBooks', null, {})
  }
};
