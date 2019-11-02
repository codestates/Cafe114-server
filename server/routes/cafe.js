const controller = require('../controllers/cafe');
const router = require('express').Router();

router.get('/', controller.cafe.get);

router.get('/address', controller.cafe.getAddress);

router.get('/:id', controller.cafe.getId);

module.exports = router;
