const controller = require('../controllers/index');
const router = require('express').Router();

/* GET home page. */
router.get('/', controller.index.get);

router.post('/signup', controller.index.signUp);

router.post('/signup/email', controller.index.checkEmail);

router.post('/signin', controller.index.signIn);

router.post('/signout', controller.index.signOut);
module.exports = router;
