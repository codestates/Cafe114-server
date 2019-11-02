'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'dan.kimhaejun@gmail.com',
        password:
          '69f3995f63225852c4d60993bc4561d156b9f6a688ca197eda935bff7db7c3081aa0b2406f8666efe413f1fa4df0d285ea85c2dd8baa065f7cbfb330b2242868',
        nickname: 'dan',
        location: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 2,
        email: 'joeun@gmail.com',
        password:
          '69f3995f63225852c4d60993bc4561d156b9f6a688ca197eda935bff7db7c3081aa0b2406f8666efe413f1fa4df0d285ea85c2dd8baa065f7cbfb330b2242868',
        nickname: 'joeun',
        location: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 3,
        email: 'youngmin@gmail.com',
        password:
          '69f3995f63225852c4d60993bc4561d156b9f6a688ca197eda935bff7db7c3081aa0b2406f8666efe413f1fa4df0d285ea85c2dd8baa065f7cbfb330b2242868',
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
