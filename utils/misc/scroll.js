const scroll = async (client, { fromX, fromY, toX, toY }) => {
  return await client.touchAction([
    { action: 'press', x: fromX, y: fromY },
    { action: 'moveTo', x: toX, y: toY },
    { action: 'release' },
  ])
}

module.exports = {
  Android: scroll,
  iOS: scroll,
}
