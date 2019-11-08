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
    },
    uploadImage: async (userId, cafeId, imageURL) => {
      await db.comments
        .create({
          userId: userId,
          cafeId: cafeId,
          image: imageURL
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
      return await db.comments
        .findAll({
          where: { cafeId: cafeId },
          include: [
            { model: db.users, as: 'user', attributes: ['name', 'email'] }
          ]
        })
        .catch(err => console.error(err));
    },
    myComment: async userId => {
      return await db.comments.findAll({
        where: { userId: userId },
        include: [{ model: db.cafe, as: 'cafe', attributes: ['name'] }]
      });
    }
  },
  delete: {
    myComment: async (userId, commentId) => {
      return await db.comments
        .destroy({
          where: { userId: userId, id: commentId }
        })
        .catch(err => console.error(err));
    }
  }
};
