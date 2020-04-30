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
const getPageSource = require('./get-page-source')
const geolocation = require('./geolocation')
const pause = require('./pause')
const misc = require('./misc')
const orientation = require('./orientation')
const variables = require('./variables')
const moveOnScreen = require('./move')
const ifStatement = require('./if-statement')

const rabbitmq = require('./rabbitmq')

module.exports = {
  actionSequence,
  clickElement,
  findElement,
  findElementByXpath,
  getPageSource,
  ifStatement,
  moveOnScreen,
  pause,
  platforms,
  pushFile,
  saveScreenshot,
  setValue,
  waitForExist,
  ...alerts,
  ...geolocation,
  ...misc,
  ...orientation,
  ...variables,
  ...rabbitmq,
}
