const client = require('./client')

module.exports = async (bucket, fileName, filePath) => {
  if (!(await client.bucketExists(bucket))) {
    await client.makeBucket(bucket)
  }

  return client.fPutObject(bucket, fileName, filePath)
}
