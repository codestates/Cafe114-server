const userModel = require('../models/user');
const cafeModel = require('../models/cafe');
const commentModel = require('../models/comment');
const response = require('../middlewares/auth').response;
require('dotenv').config();

module.exports = {
  get: {
    mypage: async (req, res) => {
      console.log('req.decodedId', req.decodedId);
      const userId = req.decodedId;
      if (!req.decodedId) {
        res.json(response(false, false, 'Not logged in', null));
      } else {
        const userData = await userModel.user.getMyInfo(userId);
        const {
          name,
          email,
          nickname,
          birth,
          sex,
          agreementAd,
          location,
          phone
        } = userData;
        const userCafeData = await userModel.user.getFavorites(userId);
        console.log('userData,', userData);
        console.log('userCafeData', userCafeData);
        const result = {
          name: name,
          email: email,
          nickname: nickname,
          birth: birth,
          sex: sex,
          agreementAd: agreementAd,
          location: location,
          phone: phone,
          favoriteCafe: userCafeData
        };
        res.json(response(true, true, null, result));
      }
    },
    myComment: async (req, res) => {
      console.log('req.decodedId', req.decodedId);
      const userId = req.decodedId;
      if (!req.decodedId) {
        res.json(response(false, false, 'Not logged in', null));
      } else {
        const myComments = await commentModel.get.myComment(userId);
        res.json(response(true, true, null, myComments));
      }
    }
  },
  post: {
    favorites: async (req, res) => {
      console.log('req.decodedId', req.decodedId);
      const { cafeId } = req.body;
      if (!req.decodedId) {
        res.json(response(false, false, 'Not logged in', null));
      } else {
        const result = await userModel.user.addFavorites(req.decodedId, cafeId);
        if (result === 'Already added') {
          res.json(response(false, true, 'Already added', null));
        } else {
          res.json(response(true, true, null, 'Add favorites'));
        }
      }
    }
  },
  delete: {
    deleteFavorite: async (req, res) => {
      const { cafeId } = req.body;
      const userId = req.decodedId;
      if (!userId) {
        res.json(response(false, false, 'Not logged in', null));
      } else {
        const deletedItem = await userModel.user.deleteFavorite(userId, cafeId);
        if (deletedItem) {
          res.json(
            response(
              true,
              true,
              null,
              `Deleted favorite, cafe id : ${deletedItem}`
            )
          );
        } else {
          res.json(response(false, true, 'Already deleted', null));
        }
      }
    },
    myComment: async (req, res) => {
      const userId = req.decodedId;
      const { commentId } = req.params;
      if (!userId) {
        res.json(response(false, false, 'Not logged in', null));
      } else {
        const deletedComment = await commentModel.delete.myComment(
          userId,
          commentId
        );
        console.log('deletedComment', deletedComment);
        if (deletedComment) {
          res.json(response(true, true, null, `Deleted this message`));
        } else {
          res.json(response(false, true, 'Already deleted this message', null));
        }
      }
    }
  }
};
