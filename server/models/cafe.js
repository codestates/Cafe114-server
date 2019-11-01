const db = require('../../database/models');

module.exports = {
  cafe: {
    get: () => {
      return db.cafe.findAll();
    },
    postId: cafeId => {
      return db.cafe.findAll({
        where: { id: cafeId }
      });
    }
  }
};
