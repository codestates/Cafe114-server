'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: '김해준',
        email: 'dan.kimhaejun@gmail.com',
        password:
          '69f3995f63225852c4d60993bc4561d156b9f6a688ca197eda935bff7db7c3081aa0b2406f8666efe413f1fa4df0d285ea85c2dd8baa065f7cbfb330b2242868',
        nickname: 'dan',
        birth: '1989-02-23',
        sex: false,
        agreementAd: false,
        location: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 2,
        name: '김조은',
        email: 'joeun@gmail.com',
        password:
          '69f3995f63225852c4d60993bc4561d156b9f6a688ca197eda935bff7db7c3081aa0b2406f8666efe413f1fa4df0d285ea85c2dd8baa065f7cbfb330b2242868',
        nickname: 'joeun',
        birth: null,
        sex: true,
        agreementAd: false,
        location: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 3,
        name: '이영민',
        email: 'youngmin@gmail.com',
        password:
          '69f3995f63225852c4d60993bc4561d156b9f6a688ca197eda935bff7db7c3081aa0b2406f8666efe413f1fa4df0d285ea85c2dd8baa065f7cbfb330b2242868',
        nickname: 'ym',
        birth: null,
        sex: true,
        agreementAd: false,
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
