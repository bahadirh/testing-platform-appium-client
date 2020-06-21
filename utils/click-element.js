const clickElement = async (client, { element }) => {
  if (typeof element == 'string') {
    return await client.elementClick(element)
  } else {
    return await element.click()
  }
}

module.exports = {
  Android: clickElement,
  iOS: clickElement,
}
