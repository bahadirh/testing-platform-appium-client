// doesn't support selector-chaining yet
const findElementOnAndroid = async (client, selector, value) => {
  return await client.$(`android=new UiSelector().${selector}("${value}")`)
}

const findElementOnIOS = () => {}

module.exports = {
  Android: findElementOnAndroid,
  iOS: findElementOnIOS
}
