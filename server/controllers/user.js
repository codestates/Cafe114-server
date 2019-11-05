const models = require('../models/user');
const jwt = require('jsonwebtoken');
const response = require('../middlewares/auth').response;
require('dotenv').config();

module.exports = {
  user: {
    favorites: async (req, res) => {
      console.log('req.decodedId', req.decodedId);
      const { cafeId } = req.body;
      if (!req.decodedId) {
        res
          .status(400)
          .json(response(400, false, false, 'Not logged in', null));
      } else {
        const result = await models.user.addFavorites(req.decodedId, cafeId);
        if (result === 'Already added') {
          res
            .status(400)
            .json(response(400, false, true, 'Already added', null));
        } else {
          res.json(response(200, true, true, null, 'Add favorites'));
        }
      }
    }
  }
};
