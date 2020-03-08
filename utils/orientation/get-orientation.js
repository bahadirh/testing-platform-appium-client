const getScreenOrientation = async client => {
  return await client.getOrientation()
}

module.exports = {
  Android: getScreenOrientation,
  iOS: getScreenOrientation
}
