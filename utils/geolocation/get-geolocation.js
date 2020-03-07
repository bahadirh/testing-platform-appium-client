const getGeoLocationForAndroid = async client => {
  return await client.getGeoLocation()
}
const getGeoLocationForIOS = async client => {
  // TODO: it works after setting it somehow
  throw new Error('Getting geolocation command is not implemented on iOS.')
}
module.exports = {
  Android: getGeoLocationForAndroid,
  iOS: getGeoLocationForIOS
}
