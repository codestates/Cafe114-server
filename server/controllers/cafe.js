const models = require('../models/cafe');
const s3 = require('../../database/models/config/s3');

module.exports = {
  cafe: {
    get: async (req, res) => {
      const result = await models.cafe.get();
      res.send(result);
    },
    postId: async (req, res) => {
      const searchId = '/' + req.params.id + '-'; // searchId에 '/' 문자열 '-'룰 붙였다 s3에서 찾기위한 로직 예 /55-
      let result = await models.cafe.postId(req.params.id); // 우선 cafe db에서 id와 일치하는 데이터베이스를 가져온다.
      result = result[0].dataValues; // sequelize에서 제공하는 데이터형식이라 배열의 0번째 인덱스의 dataValues object만 가져온다.
      return s3
        .listObjectsV2({
          Bucket: 'cafe114',
          Prefix: 'cafeImage'
        }) // s3의 cafe114 버켓에서 cafeImage폴더에 접근하는 방법
        .promise() // promise()로 하면 결과값이 반환되며 promise상태이다 바로 접근 가능하여 뒤에 then붙었다.
        .then(images => images.Contents) // images.Contents를 통해 [] 배열 데이터로 바로 접근 가능
        .then(contents =>
          contents
            .filter(ele => {
              return ele.Key.includes(searchId);
            })
            .map(
              ele =>
                'https://cafe114.s3.ap-northeast-2.amazonaws.com/' + ele.Key // s3의 key만 붙이면 s3주소완성
            )
        )
        .then(filtered => {
          result.images = filtered; // cafe에서 받은 데이터에 images key로 배열 형태의 value추가해서
          res.send(result); // result로 반환한다
        });
    }
  }
};
