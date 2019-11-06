const controller = require('../controllers/cafe');
const router = require('express').Router();
const checkToken = require('../middlewares/auth').checkToken;

router.use('/', checkToken);

router.get('/', controller.get.cafeInfo);

router.get('/address', controller.get.cafeAddress);

router.get('/:id', controller.get.cafeId);

router.get('/:cafeId/comment', controller.get.comment);

router.post('/:cafeId/comment', controller.post.comment);

module.exports = router;
