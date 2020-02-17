// doesn't support selector-chaining yet
const findElementOnAndroid = async (client, selector, value) => {
  return await client.$(`android=new UiSelector().${selector}("${value}")`)
}

const findElementOnIOS = () => {
  // TODO: implement it
}

module.exports = {
  Android: findElementOnAndroid,
  iOS: findElementOnIOS
}
