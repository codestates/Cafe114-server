const userModel = require('../models/user');
const cafeModel = require('../models/cafe');
const response = require('../middlewares/auth').response;
require('dotenv').config();

module.exports = {
  user: {
    favorites: async (req, res) => {
      console.log('req.decodedId', req.decodedId);
      const { cafeId } = req.body;
      if (!req.decodedId) {
        res
          .status(200)
          .json(response(200, false, false, 'Not logged in', null));
      } else {
        const result = await userModel.addFavorites(req.decodedId, cafeId);
        if (result === 'Already added') {
          res
            .status(200)
            .json(response(200, false, true, 'Already added', null));
        } else {
          res.json(response(200, true, true, null, 'Add favorites'));
        }
      }
    },
    mypage: async (req, res) => {
      console.log('req.decodedId', req.decodedId);
      const userId = req.decodedId;
      if (!req.decodedId) {
        res.json(response(200, false, false, 'Not logged in', null));
      } else {
        const userData = await userModel.user.getMyInfo(userId);
        const userCafeData = await userModel.user.getFavorites(userId);
        console.log('userData,', userData);
        console.log('userCafeData', userCafeData);
        res.json(response(200, true, true, null, null));
      }
    }
  }
};
