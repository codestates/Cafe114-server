const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const secret = require('../../../secret');

module.exports = new AWS.S3({
  accessKeyId: secret.s3Key,
  secretAccessKey: secret.s3SecretKey,
  region: 'ap-northeast-2'
});
