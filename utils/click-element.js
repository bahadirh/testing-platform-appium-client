const clickElementOnAndroid = async (client, element) => {
  if (typeof element == 'string') {
    return await client.elementClick(element)
  } else {
    return await element.click()
  }
}

const clickElementOnIOS = async (client, element) => {
  // TODO: implement clicking element on iOS
}

module.exports = {
  Android: clickElementOnAndroid,
  iOS: clickElementOnIOS
}
