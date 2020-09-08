'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userBooks', [
      {dateRead: 'September 30th, 2002', bookId: 1, userId: 1, bookshelfId: 6, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'September 25th, 2008', bookId: 20, userId: 1 , bookshelfId:6, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'September 1st, 2010', bookId: 31, userId: 1, bookshelfId:6, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'September 15th, 2015', bookId: 4, userId: 1, bookshelfId:6, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'November 2nd, 2000', bookId: 10, userId: 1, bookshelfId:6, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'November 1st, 2020', bookId: 17, userId: 1, bookshelfId:6, statusId: 1, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'November 20th, 2019', bookId: 18, userId: 1, bookshelfId:5, statusId: 1, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'January 15th, 2018', bookId: 8, userId: 1, bookshelfId:1, statusId: 1, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'January 17th, 2015', bookId: 7, userId: 1, bookshelfId:2, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'January 18th, 2016', bookId: 2, userId: 1, bookshelfId:2, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'January 22nd, 2010', bookId: 3, userId: 1, bookshelfId:2, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'February 2nd, 2020', bookId: 39, userId: 1, bookshelfId:3, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'February 1st, 2011', bookId: 40, userId: 1, bookshelfId:3, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'February 2nd, 2009', bookId: 38, userId: 1, bookshelfId:3, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'February 6th, 2008', bookId: 37, userId: 1, bookshelfId:3, statusId: 1, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'July 17th, 2020', bookId: 35, userId: 1, bookshelfId:5, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'June 10th, 2020', bookId: 36, userId: 1, bookshelfId:5, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'August 17th, 2015', bookId: 33, userId: 1, bookshelfId:6, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'August 6st, 2010', bookId: 32, userId: 1, bookshelfId:6, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'August 5th, 2019', bookId: 28, userId: 1, bookshelfId:6, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'June 7th, 2020', bookId: 24, userId: 1, bookshelfId:6, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'October 5th, 2010', bookId: 11, userId: 1, bookshelfId:5, statusId: 1, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'October 25th, 2010', bookId: 13, userId: 1, bookshelfId:5, statusId: 1, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'March 1st, 2019', bookId: 12, userId: 1, bookshelfId:2, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'March 8th, 2018', bookId: 29, userId: 1, bookshelfId:1, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'April 3rd, 2015', bookId: 5, userId: 1, bookshelfId:3, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'April 19, 2008', bookId: 26, userId: 1, bookshelfId:1, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'May 1st, 2010', bookId: 27, userId: 1, bookshelfId:1, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'May 9th, 2017', bookId: 23, userId: 1, bookshelfId:6, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'August 1st, 1999', bookId: 22, userId: 1, bookshelfId:5, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'September 30th, 2002', bookId: 25, userId: 2, bookshelfId:6, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'September 25th, 2008', bookId: 24, userId: 2 , bookshelfId:6, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'September 1st, 2010', bookId: 21, userId: 2, bookshelfId:6, statusId: 4, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'September 15th, 2015', bookId: 20, userId: 2, bookshelfId:5, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'November 2nd, 2000', bookId: 18, userId: 2, bookshelfId:2, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'November 1st, 2020', bookId: 19, userId: 2, bookshelfId:2, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'November 20th, 2019', bookId: 11, userId: 2, bookshelfId:2, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'January 15th, 2018', bookId: 2, userId: 2, bookshelfId:1, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'January 17th, 2015', bookId:37, userId: 2, bookshelfId:1, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'January 18th, 2016', bookId: 15, userId: 2, bookshelfId:6, statusId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'January 22nd, 2010', bookId: 9, userId: 2, bookshelfId:6, statusId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'February 2nd, 2020', bookId: 7, userId: 2, bookshelfId:5, statusId:2, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'February 1st, 2011', bookId: 5, userId: 2, bookshelfId:5, statusId:1, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'February 2nd, 2009', bookId: 4, userId: 2, bookshelfId:5, statusId:4, createdAt: new Date(), updatedAt: new Date()},
      {dateRead: 'February 6th, 2008', bookId: 40, userId: 2, bookshelfId:6, statusId:3, createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userBooks', null, {})
  }
};
