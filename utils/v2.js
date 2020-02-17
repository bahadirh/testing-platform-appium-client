const platforms = require('./platforms')
const findElement = require('./find-element')
const waitForElement = require('./wait-for-element')
const clickElement = require('./click-element')
const pushFile = require('./push-file')

module.exports = {
  clickElement,
  findElement,
  platforms,
  pushFile,
  waitForElement
}
