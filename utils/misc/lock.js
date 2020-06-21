const lockDevice = async (client, { seconds = 30 }) => {
  return await client.lock(seconds)
}

module.exports = {
  Android: lockDevice,
  iOS: lockDevice,
}
