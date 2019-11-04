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
      const { email, password } = req.body;
      let token = await models.index.signIn(email, password);
      console.log('token', token);
      console.log('typeof token', typeof token);
      if (token === 'Incorrect information') {
        res.send('Failed login');
      }
      res.cookie('userToken', token, { httpOnly: true });
      res.json({ token: token }); // 유저의 cookie에 토큰 정보 심어주기;
    },
    signOut: async (req, res) => {
      res.clearCookie('userToken');
      res.send('Good bye');
    }
  }
};
