const getPageSource = async client => {
  return await client.getPageSource()
}

module.exports = {
  Android: getPageSource,
  iOS: getPageSource
}
