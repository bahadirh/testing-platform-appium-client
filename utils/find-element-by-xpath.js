const findElementByXpathOnAndroid = async (client, path) => {
  return await client.$(path)
}

const findElementByXpathOnIOS = async (client, path) => {
  return await client.$(path)
}

module.exports = {
  Android: findElementByXpathOnAndroid,
  iOS: findElementByXpathOnIOS
}
