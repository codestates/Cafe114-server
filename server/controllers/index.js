const models = require('../models/index');

module.exports = {
  index: {
    get: (req, res) => {
      res.send('Welcome to Cafe114');
    },
    signUp: async (req, res) => {
      let result = await models.index.signUp(req.body);
      if (!result) {
        res.status(400).send('Failed signup');
      } else {
        res.send('Complete signup');
      }
    },
    checkEmail: async (req, res) => {
      let result = await models.index.checkEmail(req.body.email);
      if (result !== null) {
        res.status(400).send('Duplicated email');
      }
      res.send('Available email');
    },
    signIn: async (req, res) => {
      let token = await models.index.signIn(req.body);
      console.log('token', token);
      console.log('typeof token', typeof token);
      if (token === 'Incorrect information') {
        res.status(400).send('Failed login');
      }
      res.cookie('userToken', token); // 유저의 cookie에 토큰 정보 심어주기
      res.json({ token: token }); // token 정보 반환히기
      // res.redirect('/user/login');
    },
    signOut: async (req, res) => {
      res.clearCookie('userToken');
      res.send('Good bye');
    }
  }
};
