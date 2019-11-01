const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const s3 = require('../database/models/config/s3');

const models = require('../database/models/index.js');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cafeRouter = require('./routes/cafe');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

models.sequelize // AWS RDS mysql 연결해주기
  .sync()
  .then(() => {
    console.log('연결성공');
  })
  .catch(err => {
    console.log('연결실패');
    console.error(err);
  });

console.log('s3 connect region : ', s3.config.region);
// AWS S3 연결해주기
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'ap-northeast-2'
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cafe', cafeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
