const db = require('../../database/models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  index: {
    signIn: async body => {
      const { email, password } = body;
      const result = await db.users
        .findOne({ where: { email: email } })
        .catch(err => console.error(err));
      if (result === null) return 'Incorrect information'; // 아이디가 잘못되서 이상한 정보일때
      const dbPassword = result.dataValues.password;
      const hashPassword = crypto
        .createHash('sha512')
        .update(password + process.env.password)
        .digest('hex');

      if (dbPassword === hashPassword) {
        const token = jwt.sign(
          {
            email: email
          },
          process.env.password,
          { expiresIn: '60m' }
        );
        return token;
      } else {
        return 'Incorrect information';
      }
    },
    signUp: async body => {
      const { email, password } = body;
      const hashPassword = crypto
        .createHash('sha512')
        .update(password + process.env.password)
        .digest('hex');
      return await db.users
        .create({
          email: email,
          password: hashPassword
        })
        .catch(err => console.error(err));
    },
    checkEmail: async email => {
      return await db.users
        .findOne({ where: { email: email } })
        .catch(err => console.error(err));
    }
  }
};
