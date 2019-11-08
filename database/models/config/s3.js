const AWS = require('aws-sdk');
require('dotenv').config();

module.exports = new AWS.S3({
  accessKeyId: process.env.s3Key,
  secretAccessKey: process.env.s3SecretKey,
  region: 'ap-northeast-2'
});
