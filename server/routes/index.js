const controller = require('../controllers');
const router = require('express').Router();

/* GET home page. */
router.get('/', controller.index.get);

module.exports = router;
