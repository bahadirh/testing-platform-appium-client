module.exports.onPlatform = client => {
  const platform = client.capabilities.platformName
  const fn = async (actions, ...args) => {
    return await actions[platform](client, ...args)
  }
  fn.waitForExist = async (element, ms = 3000) => {
    await element.waitForExist(ms)
    return fn
  }

  return fn
}
