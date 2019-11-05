const controller = require('../controllers/cafe');
const router = require('express').Router();
const checkToken = require('../middlewares/auth').checkToken;

router.use('/', checkToken);

router.get('/', controller.cafe.get);

router.get('/address', controller.cafe.getAddress);

router.get('/:id', controller.cafe.getId);

module.exports = router;
