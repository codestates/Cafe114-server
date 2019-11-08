const models = require('../models/index');
const response = require('../middlewares/auth').response;
module.exports = {
  get: {
    mainPage: (req, res) => {
      res.send('Welcome to Cafe114');
    },
    signOut: async (req, res) => {
      // req.cookies.userToken = null;
      res.clearCookie('userToken');
      res.json(response(true, false, null, 'Sign out'));
    }
  },
  post: {
    signUp: async (req, res) => {
      const { name, email, password, sex, agreementAd } = req.body;
      let result = await models.index.signUp(
        name,
        email,
        password,
        sex,
        agreementAd
      );
      if (result.errors) {
        res.json(response(false, false, result.errors[0].message, null));
      } else {
        res.json(response(true, false, null, 'Completed signup'));
      }
    },
    checkEmail: async (req, res) => {
      let result = await models.index.checkEmail(req.body.email);
      if (result === null) {
        res.json(response(true, false, null, 'Available email'));
      }
      res.json(response(false, false, 'Duplicated email', result.email));
    },
    signIn: async (req, res) => {
      const { email, password } = req.body;
      let token = await models.index.signIn(email, password);
      if (token === 'Incorrect information') {
        res.clearCookie('userToken');
        res.json(response(false, false, 'Token is not issued', null));
      } else {
        res.cookie('userToken', token, {
          maxAge: 2 * 1000 * 60 * 60,
          httpOnly: true
        });
        res.json(response(true, true, null, 'Token is issued')); // 유저의 cookie에 토큰 정보 심어주기;
      }
    },

    kakao: async (req, res) => {
      console.log('req.body.kakao', req.body.kakao);
      const { id, email, nickname, image } = req.body.kakao;
      const kakaoUserToken = await models.index.kakao(
        email,
        nickname,
        image,
        id
      );
      res.cookie('userToken', kakaoUserToken, {
        maxAge: 2 * 1000 * 60 * 60,
        httpOnly: true
      });
      res.json(response(true, true, null, 'Token is issued for kakao user'));
    }
  }
};
