'use strict';

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {firstName: 'demo',
        lastName: 'demo',
        email: 'demo@gmail.com',
        password: bcrypt.hashSync('password'),
        createdAt: new Date(), updatedAt: new Date(),
        userName:'demo'},
      {firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(), updatedAt: new Date(),
        userName:faker.internet.userName()},
      {firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(), updatedAt: new Date(),
        userName:faker.internet.userName()},
      {firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(), updatedAt: new Date(),
        userName:faker.internet.userName()}
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
