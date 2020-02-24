const clickElementOnAndroid = async (client, element) => {
  if (typeof element == 'string') {
    return await client.elementClick(element)
  } else {
    return await element.click()
  }
}

const clickElementOnIOS = async (client, element) => {
  if (typeof element == 'string') {
    return await client.elementClick(element)
  } else {
    return await element.click()
  }
}

module.exports = {
  Android: clickElementOnAndroid,
  iOS: clickElementOnIOS
}
