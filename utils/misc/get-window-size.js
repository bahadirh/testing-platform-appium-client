const getWindowSize = async client => {
  return await client.getWindowSize()
}

module.exports = {
  Android: getWindowSize,
  iOS: getWindowSize
}
