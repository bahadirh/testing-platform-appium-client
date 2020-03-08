const pause = async (client, milliseconds) => {
  return await client.pause(milliseconds)
}

module.exports = {
  Android: pause,
  iOS: pause
}
