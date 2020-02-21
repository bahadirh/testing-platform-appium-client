const findElementByXpathOnAndroid = async (client, path) => {
  const data = await client.findElement('xpath', path)
  return data.ELEMENT
}

const findElementByXpathOnIOS = async (client, path) => {
  // TODO: implement finding element by using xpath on iOS
}

module.exports = {
  Android: findElementByXpathOnAndroid,
  iOS: findElementByXpathOnIOS
}
