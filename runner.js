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
      automationName: 'UiAutomator2',
    },
  }

  return baseOpts
}

module.exports = async (spec, appDir, screenshotsDir) => {
  return wdio.remote(optionsBuilder(appDir)).then(async client => {
    const _ = utils.platforms.onPlatform(client, utils)
    await client.setTimeouts(10000)

    const state = new Array()
    let stepNo = 1

    try {
      for (const step of spec) {
        await _(_[step.action], step)

        const screenshotFile = `${screenshotsDir}/${stepNo}.png`
        state.push({
          screenshotFilename: `${stepNo}.png`,
          xml: xml2map.tojson(await _(_.getPageSource)),
        })

        await _(_.saveScreenshot, screenshotFile)
        stepNo++
      }

      return { state }
    } catch (error) {
      return { error, state }
    } finally {
      await client.deleteSession()
    }
  })
}
