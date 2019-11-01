const controller = require('../controllers/cafe');
const router = require('express').Router();

router.get('/', controller.cafe.get);

router.get('/:id', controller.cafe.getId);

module.exports = router;
