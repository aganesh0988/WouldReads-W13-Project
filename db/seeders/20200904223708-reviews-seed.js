'use strict';

const faker = require("faker");
const ranInt = (max, min = 1) => Math.floor(Math.random() * (max - min) + min);
const reviewGen = num => {
  let reviews = [];
  while (num > 0) {
    reviews.push({rating: ranInt(6), review: faker.lorem.sentences(), userId: ranInt(5), bookId: ranInt(41), createdAt: new Date(), updatedAt: new Date()})
    num-=1
  };
  return reviews
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', reviewGen(80))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {})
  }
};
