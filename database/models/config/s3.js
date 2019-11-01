const AWS = require('aws-sdk');
require('dotenv').config();

const secret = require('../../../secret');

module.exports = new AWS.S3({
  accessKeyId: process.env.s3Key,
  secretAccessKey: process.env.s3SecretKey,
  region: 'ap-northeast-2'
});
