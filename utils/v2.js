const platforms = require('./platforms')
const findElement = require('./find-element')
const clickElement = require('./click-element')
const pushFile = require('./push-file')
const saveScreenshot = require('./save-screenshot')
const actionSequence = require('./action-sequence')
const setValue = require('./set-value-of-element')
const findElementByXpath = require('./find-element-by-xpath')
const alerts = require('./alerts')
const waitForExist = require('./wait-for-exist')

module.exports = {
  actionSequence,
  clickElement,
  findElement,
  findElementByXpath,
  platforms,
  pushFile,
  saveScreenshot,
  setValue,
  waitForExist,
  ...alerts
}
