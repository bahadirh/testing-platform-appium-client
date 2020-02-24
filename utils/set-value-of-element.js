const setValueOnAndroid = async (client, element, data) => {
  return await element.setValue(data)
}

const setValueOnIOS = async (client, element, data) => {
  return await element.setValue(data)
}

module.exports = {
  Android: setValueOnAndroid,
  iOS: setValueOnIOS
}
