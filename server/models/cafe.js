const db = require('../../database/models');

module.exports = {
  cafe: {
    get: async () => {
      return await db.cafe
        .findAll({
          include: [
            {
              model: db.comments,
              as: 'comments',
              limit: 1,
              attributes: [['createdAt', 'DESC']]
            }
          ]
        })
        .then(ele => ele.map(ele => ele.dataValues))
        .catch(err => console.error(err));
    },
    getAddress: async () => {
      return await db.cafe
        .findAll()
        .then(ele =>
          ele.map(ele => {
            return { id: ele.id, address: ele.address };
          })
        )
        .catch(err => console.error(err));
    },
    getId: async cafeId => {
      return await db.cafe
        .findOne({
          where: { id: cafeId }
        })
        .then(result => result.dataValues)
        .catch(err => console.error(err));
    }
  }
};
