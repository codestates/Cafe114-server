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
        nickname: null,
        birth: '1989',
        sex: false,
        phone: null,
        agreementAd: null,
        location: null,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 2,
        name: '김조은',
        email: 'kimgood91@gmail.com',
        password:
          'f48d8421916edc55a4f841b1445521b9ab89bb970452f5f8f7d1034b891d884400ed9093fd81dc7bcdf1687c108d14b0c128e6c329f01e185f80b8b224686644',
        nickname: null,
        birth: '1991',
        sex: true,
        phone: '010-4292-6693',
        agreementAd: false,
        location: false,
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
        birth: '2000',
        sex: false,
        phone: null,
        agreementAd: false,
        location: false,
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
