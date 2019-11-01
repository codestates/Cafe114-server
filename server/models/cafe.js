const db = require('../../database/models');

module.exports = {
  cafe: {
    get: () => {
      return db.cafe.findAll().catch(err => console.error(err));
    },
    getId: cafeId => {
      return db.cafe
        .findAll({
          where: { id: cafeId }
        })
        .catch(err => console.error(err));
    }
  }
};
