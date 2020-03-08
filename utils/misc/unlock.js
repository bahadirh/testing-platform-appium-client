const unlockDevice = async client => {
  return await client.unlock()
}

module.exports = {
  Android: unlockDevice,
  iOS: unlockDevice
}
