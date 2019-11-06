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
        .then(result => result.dataValues)
        .catch(err => err);
      return await db.comments.findAll({ where: { cafeId: cafeId } });
    }
  }
};
