module.exports.onPlatform = client => async (actions, ...args) => {
  return await actions[client.capabilities.platformName](client, ...args)
}
