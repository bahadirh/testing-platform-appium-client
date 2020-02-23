// doesn't support selector-chaining yet
const findElementOnAndroid = async (client, selector, value) => {
  return await client.$(`android=new UiSelector().${selector}("${value}")`)
}

const findElementOnIOS = async (client, selector, value) => {
  return await client.$(`-ios predicate string:${selector} == '${value}'`)
}

module.exports = {
  Android: findElementOnAndroid,
  iOS: findElementOnIOS
}
