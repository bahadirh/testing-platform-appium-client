module.exports.onPlatform = (client, functions) => {
  const platform = client.capabilities.platformName
  const fn = async (actions, ...args) => {
    return await actions[platform](client, ...args)
  }
  // assigns functions to the return object as keys
  Object.keys(functions).forEach(helper => {
    fn[helper] = functions[helper]
  })

  return fn
}
