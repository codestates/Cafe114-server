const controller = require('../controllers/cafe');
const router = require('express').Router();

router.get('/', controller.cafe.get);

router.post('/:id', controller.cafe.postId);

module.exports = router;
