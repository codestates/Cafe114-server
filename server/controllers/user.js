const models = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = {
  user: {
    favorites: async (req, res) => {
      const token = req.cookies.userToken;
      const { cafeId } = req.body;
      // console.log('token', token);
      if (!token) {
        res.status(400).send('Invalid access');
      } else {
        const decodedToken = jwt.verify(token, process.env.password);
        // console.log('decodedToken', decodedToken);
        const result = await models.user.addFavorites(decodedToken.id, cafeId);
        if (result === 'Already added') {
          res.status(400).send('Already added');
        } else {
          res.send('Success');
        }
      }
    }
  }
};
