const moveOnScreen = async (client, { x, y }) => {
  return await client.touchMove(x, y)
}

module.exports = {
  Android: moveOnScreen,
  iOS: moveOnScreen,
}
