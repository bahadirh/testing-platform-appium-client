const findElement = require('../find-element')
const assert = require('assert')

const assertElementTextBuilder = elementFinder => async (
  client,
  { elementSelector, selectElementBy, value }
) => {
  const element = await elementFinder(client, selectElementBy, elementSelector)
  return assert.equal(await element.getText(), value)
}

module.exports = {
  Android: assertElementTextBuilder(findElement.Android),
  iOS: assertElementTextBuilder(findElement.iOS),
}
