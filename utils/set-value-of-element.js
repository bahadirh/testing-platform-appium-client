const findElement = require('./find-element')

const setValueFnBuilder = elementFinder => async (
  client,
  { elementSelector, selectElementBy, value }
) => {
  const element = await elementFinder(client, selectElementBy, elementSelector)
  return await element.setValue(value)
}

module.exports = {
  Android: setValueFnBuilder(findElement.Android),
  iOS: setValueFnBuilder(findElement.iOS),
}
