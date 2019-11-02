const controller = require('../controllers/user');
const express = require('express');
const router = express.Router();

/* GET user listing. */
router.get('/', function(req, res, next) {
  res.send('Get yours infomation');
});
// 좋아하는 카페 추가하기
router.post('/favorites', controller.user.favorites);

module.exports = router;
