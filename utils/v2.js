const platforms = require('./platforms')
const findElement = require('./find-element')
const waitForElement = require('./wait-for-element')
const clickElement = require('./click-element')
const pushFile = require('./push-file')
const saveScreenshot = require('./save-screenshot')

module.exports = {
  clickElement,
  findElement,
  platforms,
  pushFile,
  saveScreenshot,
  waitForElement
}
