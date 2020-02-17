module.exports.onPlatform = (client, functions) => {
  const platform = client.capabilities.platformName
  const fn = async (actions, ...args) => {
    return await actions[platform](client, ...args)
  }
  // TODO: move wait for exist outside
  fn.waitForExist = async (element, ms = 3000) => {
    await element.waitForExist(ms)
    return fn
  }
  // assigns functions to the return object as keys
  Object.keys(functions).forEach(helper => {
    fn[helper] = functions[helper]
  })

  return fn
}
