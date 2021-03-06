const cafeModel = require('../models/cafe');
const userModel = require('../models/user');
const commentModel = require('../models/comment.js');
const s3 = require('../../database/models/config/s3');
const response = require('../middlewares/auth').response;
require('dotenv').config();

module.exports = {
  get: {
    cafeInfo: async (req, res) => {
      console.log('post, get, cafe 현재사용자의 id는', req.decodedId);
      const result = await cafeModel.cafe.get();
      if (!req.decodedId) {
        res.json(
          response(true, false, null, { favorites: null, result: result })
        );
      } else {
        const userFavorites = await userModel.user.getFavorites(req.decodedId);
        res.json(
          response(true, true, null, {
            favorites: !userFavorites.length ? [] : userFavorites,
            result: result
          })
        );
      }
    },
    cafeAddress: async (req, res) => {
      const result = await cafeModel.cafe.getAddress();
      res.json(response(true, true, null, result));
    },
    cafeId: async (req, res) => {
      console.log('post, getId, 현재 사용자의 id는', req.decodedId);
      const searchId = '/' + req.params.id + '-'; // searchId에 '/' 문자열 '-'룰 붙였다 s3에서 찾기위한 로직 예 /55-
      let result = await cafeModel.cafe.getId(req.params.id); // cafe db에서 id와 일치하는 데이터베이스를 가져온다.
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
        .then(async filtered => {
          result.images = filtered; // cafe에서 받은 데이터에 images key로 배열 형태의 value추가해서
          if (!req.decodedId) {
            res.json(response(true, false, null, result));
          } else {
            const checkUserFavorite = await userModel.user.checkFavorite(
              req.decodedId,
              req.params.id
            );
            result.favorite = checkUserFavorite;
            result.userId = req.decodedId;
            res.json(response(true, true, null, result)); // result로 반환한다
          }
        })
        .catch(err => console.error(err));
    },
    comment: async (req, res) => {
      const userId = req.decodedId;
      const { cafeId } = req.params;
      if (userId) {
        const getAllComments = await commentModel.get.comment(cafeId);
        res.json(response(true, true, null, getAllComments));
      } else {
        res.json(response(false, false, 'Not logged in', null));
      }
    }
  },
  post: {
    comment: async (req, res) => {
      const userId = req.decodedId;
      const { comment } = req.body;
      const { cafeId } = req.params;
      if (userId) {
        const createAndGetAllComments = await commentModel.create.comment(
          userId,
          cafeId,
          comment
        );
        res.json(response(true, true, null, createAndGetAllComments));
      } else {
        res.json(response(false, false, 'Not logged in', null));
      }
    },
    image: async (req, res) => {
      console.log('req.file', req.file);
      console.log('req.file.location', req.file.location);
      const userId = req.decodedId;
      const { cafeId } = req.params;
      const imageURL = req.file.location;
      if (userId) {
        const addImageAndGiveComment = await commentModel.create.uploadImage(
          userId,
          cafeId,
          imageURL
        );
        res.json(response(true, true, null, addImageAndGiveComment));
      } else {
        res.json(response(false, false, 'Not logged in', null));
      }
    }
  }
};
