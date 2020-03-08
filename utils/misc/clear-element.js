const clearElement = async (client, elementId) => {
  if (typeof elementId != String) {
    elementId = elementId.elementId
  }
  return await client.elementClear(elementId)
}

module.exports = {
  Android: clearElement,
  iOS: clearElement
}
