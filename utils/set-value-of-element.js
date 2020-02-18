const setValueOnAndroid = async (client, element, data) => {
  return await element.setValue(data)
}

const setValueOnIOS = async (client, element, data) => {
  // TODO: implement setting given value to the element given on iOS
}

module.exports = {
  Android: setValueOnAndroid,
  iOS: setValueOnIOS
}
