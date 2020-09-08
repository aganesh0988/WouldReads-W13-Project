'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      { genreName: "Adventure", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Art", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Graphic Novel", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Mystery", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Science", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Science Fiction", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Young Adult", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Psychology", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Classic", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Cooking", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Horror", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Fantasy", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Biography", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Literary", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Children", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Business", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Fiction", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Music", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Travel", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Sports", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Self Help", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Poetry", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Romance", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Memoir", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Nonfiction", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Humor", createdAt: new Date(), updatedAt: new Date()},
      { genreName: "Philosophy", createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Genres', null, {})
  }
};
