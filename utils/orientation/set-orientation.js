/**
 * Tries to set the device's orientation to given mode
 * @param {*} client Device connection instance
 * @param {String} orientation "PORTRAIT" or "LANDSCAPE" only
 */
const setScreenOrientation = async (client, { orientation }) => {
  return await client.orientation(orientation)
}

module.exports = {
  Android: setScreenOrientation,
  iOS: setScreenOrientation,
}
