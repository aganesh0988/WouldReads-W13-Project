'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateRead: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Books'}
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users'}
      },
      bookshelfId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Bookshelves'}
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Statuses'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userBooks');
  }
};
