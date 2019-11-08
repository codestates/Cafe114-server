const controller = require('../controllers/cafe');
const router = require('express').Router();
const checkToken = require('../middlewares/auth').checkToken;
const upload = require('../middlewares/uploadImage');

router.use('/', checkToken);

router.get('/', controller.get.cafeInfo);

router.get('/address', controller.get.cafeAddress);

router.get('/:id', controller.get.cafeId);

router.get('/:cafeId/comment', controller.get.comment);

router.post('/:cafeId/comment', controller.post.comment);

router.post('/:cafeId/image', upload.single('file'), controller.post.image);

module.exports = router;
