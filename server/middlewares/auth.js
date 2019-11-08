const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  checkToken: (req, res, next) => {
    const token = req.cookies.userToken;
    console.log('현재 토큰의 상황은 : ', token);
    if (!token) {
      next();
    } else {
      jwt.verify(token, process.env.password, async (err, decoded) => {
        if (err) {
          res.clearCookie('userToken');
          // req.cookies.userToken = null;
          next();
        } else {
          req.decodedId = decoded.id;
          next();
        }
      });
    }
  },
  response: (success = true, isLogin, error = null, data = null) => {
    return {
      success: success,
      isLogin: isLogin,
      error: error,
      data: data
    };
  }
};
