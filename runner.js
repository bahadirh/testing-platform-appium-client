const wdio = require('webdriverio')
const xml2map = require('xml2map')

const utils = require('./utils')

const optionsBuilder = app => {
  const baseOpts = {
    logLevel: 'silent',
    port: 4723,
    capabilities: {
      acceptInsecureCerts: true,
      allowTestPackages: true,
      app,
      platformName: 'Android',
      platformVersion: '10',
      deviceName: 'Android Emulator',
      appPackage: 'io.appium.android.apis',
      appActivity: '.view.TextFields',
      automationName: 'UiAutomator2',
    },
  }

  return baseOpts
}

module.exports = async (spec, appDir) => {
  return wdio
    .remote(optionsBuilder(appDir))
    .then(async client => {
      const _ = utils.platforms.onPlatform(client, utils)

      const state = new Array()
      for (step of spec) {
        await _(_[step.action], step)

        state.push(xml2map.tojson(await _(_.getPageSource)))
      }

      await client.deleteSession()
      return state
    })
    .catch(error => {
      console.error(error)
      return error
    })
}
