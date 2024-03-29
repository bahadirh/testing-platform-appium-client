/**
 *
 * @param {*} client Client instance
 * @param {String} savePath An absolute or relative path with
 * .png extension where the screenshot is to be saved.
 */
const saveScreenshotOnAndroid = async (client, savePath) => {
  //
  return await client.saveScreenshot(savePath)
}

const saveScreenshotOnIOS = async (client, savePath) => {
  return await client.saveScreenshot(savePath)
}

module.exports = {
  Android: saveScreenshotOnAndroid,
  iOS: saveScreenshotOnIOS
}
