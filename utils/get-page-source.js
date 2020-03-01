const { tojson } = require('xml2map')

const getPageSource = async client => {
  return JSON.stringify(tojson(await client.getPageSource()))
}

module.exports = {
  Android: getPageSource,
  iOS: getPageSource
}
