const db = require('../../database/models');

module.exports = {
  create: {
    comment: async (userId, cafeId, comment) => {
      await db.comments
        .create({
          userId: userId,
          cafeId: cafeId,
          comment: comment
        })
        .catch(err => console.error(err));
      return await db.comments
        .findAll({
          where: { cafeId: cafeId },
          include: [
            { model: db.users, as: 'user', attributes: ['name', 'email'] }
          ]
        })
        .catch(err => console.error(err));
    }
  },
  get: {
    comment: async cafeId => {
      // return await db.comments
      //   .findAll({ where: { cafeId: cafeId } })
      //   .catch(err => console.error(err));
      return await db.comments
        .findAll({
          where: { cafeId: cafeId },
          include: [
            { model: db.users, as: 'user', attributes: ['name', 'email'] }
          ]
        })
        .catch(err => console.error(err));
    }
  }
};
