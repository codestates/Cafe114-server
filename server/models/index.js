const db = require('../../database/models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  index: {
    signIn: async (email, password) => {
      const result = await db.users
        .findOne({ where: { email: email } })
        .catch(err => console.error(err));
      if (result === null) return 'Incorrect information'; // 아이디가 잘못되서 이상한 정보일때
      const dbPassword = result.dataValues.password;
      const id = result.dataValues.id;
      const hashPassword = crypto
        .createHash('sha512')
        .update(password + process.env.password)
        .digest('hex');

      if (dbPassword === hashPassword) {
        const token = await jwt.sign(
          {
            id: id
          },
          process.env.password,
          { expiresIn: '120m' }
        );
        return token;
      } else {
        return 'Incorrect information';
      }
    },
    signUp: async (name, email, password, sex) => {
      const hashPassword = crypto
        .createHash('sha512')
        .update(password + process.env.password)
        .digest('hex');
      return await db.users
        .create({
          name: name,
          email: email,
          password: hashPassword,
          sex: sex
        })
        .catch(err => err);
    },
    checkEmail: async email => {
      return await db.users
        .findOne({ where: { email: email } })
        .catch(err => console.error(err));
    },
    kakao: async (email, nickname, image, kakaoId) => {
      const kakaoUserId = await db.users
        .findOne({ where: { kakaoId: kakaoId } })
        .then(async result => {
          if (!result) {
            await db.users.create({
              kakaoId: kakaoId,
              email: email,
              nickname: nickname,
              image: image
            });

            return db.users
              .findOne({ where: { kakaoId: kakaoId } })
              .then(result => {
                console.log(
                  '새로 가입한 카카오유저입니다 이분은',
                  result.dataValues.id
                );
                return result.dataValues.id;
              });
          } else {
            console.log(
              '이미 가입한 카카오유저입니다 이분은',
              result.dataValues.id
            );
            return result.dataValues.id;
          }
        });
      const token = await jwt.sign(
        {
          id: kakaoUserId
        },
        process.env.password,
        { expiresIn: '120m' }
      );
      return token;
    }
  }
};
