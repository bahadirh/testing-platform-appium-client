const lockDevice = async (client, seconds) => {
  return await client.lock(seconds)
}

module.exports = {
  Android: lockDevice,
  iOS: lockDevice
}
