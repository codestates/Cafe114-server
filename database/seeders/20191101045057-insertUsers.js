'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'dan.kimhaejun@gmail.com',
        password: '1234',
        nickname: 'dan',
        location: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 2,
        email: 'joeun@gmail.com',
        password: '1234',
        nickname: 'joeun',
        location: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 3,
        email: 'youngmin@gmail.com',
        password: '1234',
        nickname: 'ym',
        location: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
