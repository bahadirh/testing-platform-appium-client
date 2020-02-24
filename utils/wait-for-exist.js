const waitForExistOnAndroid = async (client, element, ms = 3000) => {
  return await element.waitForExist(ms)
}

const waitForExistOnIOS = async (client, element, ms = 3000) => {
  return await element.waitForExist(ms)
}

module.exports = {
  Android: waitForExistOnAndroid,
  iOS: waitForExistOnIOS
}
