const controller = require('../controllers/cafe');
const router = require('express').Router();

router.get('/', controller.cafe.get);

module.exports = router;
