const waitForElementOnAndroid = async (client, element, ms = 3000) => {
  return await element.waitForExist(ms)
}

const waitForElementOnIOS = async (client, element, ms = 3000) => {
  // TODO: implement waiting for element to exist on iOS
}

module.exports = {
  Android: waitForElementOnAndroid,
  iOS: waitForElementOnIOS
}
