const findElement = require('./find-element')

const clickElement = elementFinder => async (
  client,
  { elementSelector, selectElementBy }
) => {
  const element = await elementFinder(client, {
    selector: selectElementBy,
    value: elementSelector,
  })

  if (typeof element == 'string') {
    return await client.elementClick(element)
  } else {
    return await element.click()
  }
}

module.exports = {
  Android: clickElement(findElement.Android),
  iOS: clickElement(findElement.iOS),
}
