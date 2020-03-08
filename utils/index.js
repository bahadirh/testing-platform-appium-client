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
const getGeoLocation = require('./geolocation/get-geolocation')
const setGeoLocation = require('./geolocation/set-geolocation')
const pause = require('./pause')
const misc = require('./misc')
const orientation = require('./orientation')

module.exports = {
  actionSequence,
  clickElement,
  findElement,
  findElementByXpath,
  getGeoLocation,
  getPageSource,
  getScreenOrientation,
  pause,
  platforms,
  pushFile,
  saveScreenshot,
  setGeoLocation,
  setValue,
  waitForExist,
  ...alerts,
  ...misc,
  ...orientation
}
