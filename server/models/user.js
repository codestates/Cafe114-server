const db = require('../../database/models');
require('dotenv').config();

module.exports = {
  user: {
    getMyInfo: async userId => {
      return await db.users
        .findOne({ where: { id: userId } })
        .then(result => null || result.dataValues);
    },
    addFavorites: async (id, cafeId) => {
      const result = await db.userLikeCafe
        .findOne({ where: { userId: id, cafeId: cafeId } })
        .catch(err => console.error(err));
      if (!result) {
        return await db.userLikeCafe
          .create({
            userId: id,
            cafeId: cafeId
          })
          .catch(err => console.error(err));
      } else {
        return 'Already added';
      }
    },
    getFavorites: async id => {
      return await db.userLikeCafe
        .findAll({
          where: { userId: id }
        })
        .then(ele => ele.map(ele => ele.dataValues.cafeId))
        .catch(err => console.error(err));
    },
    checkFavorite: async (userId, cafeId) => {
      return await db.userLikeCafe
        .findOne({
          where: { userId: userId, cafeId: cafeId }
        })
        .then(ele => (ele === null ? false : true))
        .catch(err => console.error(err));
    },
    deleteFavorite: async (userId, cafeId) => {
      return await db.userLikeCafe
        .destroy({
          where: { userId: userId, cafeId: cafeId }
        })
        .catch(err => console.error(err));
    }
  }
};
