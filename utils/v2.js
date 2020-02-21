const platforms = require('./platforms')
const findElement = require('./find-element')
const waitForElement = require('./wait-for-element')
const clickElement = require('./click-element')
const pushFile = require('./push-file')
const saveScreenshot = require('./save-screenshot')
const actionSequence = require('./action-sequence')
const setValue = require('./set-value-of-element')
const findElementByXpath = require('./find-element-by-xpath')
const alerts = require('./alerts')

module.exports = {
  actionSequence,
  clickElement,
  findElement,
  findElementByXpath,
  platforms,
  pushFile,
  saveScreenshot,
  setValue,
  waitForElement,
  ...alerts
}
