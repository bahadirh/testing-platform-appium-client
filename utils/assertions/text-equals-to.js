const findElement = require('../find-element')
const assert = require('assert')

const assertElementTextBuilder = elementFinder => async (
  client,
  { elementSelector, selectElementBy, value }
) => {
  const element = await elementFinder(client, {
    selector: selectElementBy,
    value: elementSelector,
  })
  return assert.equal(await element.getText(), value.toString())
}

module.exports = {
  Android: assertElementTextBuilder(findElement.Android),
  iOS: assertElementTextBuilder(findElement.iOS),
}
