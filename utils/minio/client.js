
require("../../config")
const minio = require('minio')
const { minioURL, minioSecretKey, minioAccessKey } = process.env

const client = new minio.Client({
  endPoint: minioURL,
  useSSL: true,
  accessKey: minioAccessKey,
  secretKey: minioSecretKey,
})

module.exports = client
