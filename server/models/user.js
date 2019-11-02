const db = require('../../database/models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  user: {
    addFavorites: async (id, cafeId) => {
      const result = await db.userLikeCafe
        .findOne({ where: { userId: id, cafeId: cafeId } })
        .catch(err => console.error(err));
      if (!result) {
        const addLike = await db.userLikeCafe
          .create({
            userId: id,
            cafeId: cafeId
          })
          .catch(err => console.error(err));
        return addLike;
      } else {
        return 'Already added';
      }
    },
    getFavorites: async id => {
      const userFavorites = await db.userLikeCafe
        .findAll({
          where: { userId: id }
        })
        .then(ele => ele.map(ele => ele.dataValues.cafeId))
        .catch(err => console.error(err));
      return userFavorites;
    }
  }
};
