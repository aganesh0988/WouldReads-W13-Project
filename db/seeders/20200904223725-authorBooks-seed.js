'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authorBooks', [
      {authorId: 2, bookId: 1, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 1, bookId: 2, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 1, bookId: 3, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 1, bookId: 4, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 4, bookId: 5, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 4, bookId: 6, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 5, bookId: 7, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 5, bookId: 8, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 6, bookId: 9, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 6, bookId: 10, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 11, bookId: 11, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 13, bookId: 12, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 21, bookId: 13, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 14, bookId: 14, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 22, bookId: 15, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 15, bookId: 16, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 12, bookId: 17, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 17, bookId: 18, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 17, bookId: 19, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 17, bookId: 20, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 17, bookId: 21, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 18, bookId: 22, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 18, bookId: 23, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 18, bookId: 24, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 17, bookId: 25, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 10, bookId: 26, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 10, bookId: 27, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 10, bookId: 28, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 10, bookId: 29, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 10, bookId: 30, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 10, bookId: 31, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 10, bookId: 32, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 8, bookId: 33, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 8, bookId: 34, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 8, bookId: 35, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 1, bookId: 36, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 19, bookId: 37, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 20, bookId: 38, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 20, bookId: 39, createdAt: new Date(), updatedAt: new Date()},
      {authorId: 20, bookId: 40, createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('authorBooks', null, {})
  }
};
