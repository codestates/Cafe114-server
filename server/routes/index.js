const controller = require('../controllers/index');
const checkToken = require('../middlewares/auth').checkToken;
const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res) => {
  console.log('__dirname', __dirname);
  res.sendFile(__dirname + '/index.html');
});

router.get('/signout', controller.get.signOut);

router.post('/signup', controller.post.signUp);

router.post('/signup/email', controller.post.checkEmail);

router.post('/signin', controller.post.signIn);

router.use('/signin/kakao', checkToken);

router.post('/signin/kakao', controller.post.kakao);

module.exports = router;
