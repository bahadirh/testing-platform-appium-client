/**
 * Reinstalls the app and starts a new session
 * @param {*} client Device connection instance
 */
const resetApp = async client => {
  return await client.reset()
}

module.exports = {
  Android: resetApp,
  iOS: resetApp
}
