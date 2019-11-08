const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('../../database/models/config/s3');

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'cafe114/userUploadImage', // 버킷 이름
    contentType: multerS3.AUTO_CONTENT_TYPE, // 자동을 콘텐츠 타입 세팅
    acl: 'public-read-write', // 클라이언트에서 자유롭게 가용하기 위함
    key: (req, file, cb) => {
      console.log(file);
      cb(null, String(Date.now()));
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 } // 용량 제한
});

module.exports = upload;
