const clickElementOnAndroid = async (client, element) => {
  return await element.click()
}

const clickElementOnIOS = async (client, element) => {
  // TODO: implement clicking element on iOS
}

module.exports = {
  Android: clickElementOnAndroid,
  iOS: clickElementOnIOS
}
