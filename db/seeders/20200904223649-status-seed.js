'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Statuses', [
      {statusName: "Want to Read", createdAt: new Date(), updatedAt: new Date()},
      {statusName: "Reading", createdAt: new Date(), updatedAt: new Date()},
      {statusName: "Read", createdAt: new Date(), updatedAt: new Date()},
      {statusName: "None", createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Statuses', null, {})
  }
};
