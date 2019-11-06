const controller = require('../controllers/index');
const checkToken = require('../middlewares/auth').checkToken;
const router = require('express').Router();

/* GET home page. */
router.get('/', controller.index.get);

router.post('/signup', controller.index.signUp);

router.post('/signup/email', controller.index.checkEmail);

router.post('/signin', controller.index.signIn);

router.get('/signout', controller.index.signOut);

router.use('/signin/kakao', checkToken);

router.post('/signin/kakao', controller.index.kakao);

module.exports = router;
