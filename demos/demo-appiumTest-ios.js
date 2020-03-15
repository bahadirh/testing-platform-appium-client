const wdio = require('webdriverio')

const utils = require('../utils')

const opts = {
  logLevel: 'silent',
  port: 4723,
  capabilities: {
    // acceptInsecureCerts: true,
    // allowTestPackages: true,
    app: `${__dirname}/../ipa/AppiumTest.app`,
    // app: `${__dirname}/../ipa/iOS-Simulator-NativeDemoApp-0.2.1.app`,
    // appActivity: 'main.MainActivity',
    // appPackage: 'baho.HelloWorld',
    automationName: 'XCUITest',
    // bundleId: 'baho.HelloWorld',
    deviceName: 'iPhone 11 Pro Max',
    platformName: 'iOS',
    platformVersion: '13.3'
  }
}

async function main() {
  try {
    let element
    const client = await wdio.remote({ ...opts })
    const _ = utils.platforms.onPlatform(client, utils)

    try {
      element = await _(_.findElement, 'name', 'emailTextField')
      await _(_.waitForExist, element)
      await _(_.setValue, element, 'ba@ho.com')

      element = await _(_.findElement, 'name', 'passwordTextField')
      await _(_.waitForExist, element)
      await _(_.setValue, element, 'vbnasd123')

      element = await _(_.findElement, 'name', 'loginButton')
      await _(_.waitForExist, element)
      await _(_.clickElement, element)
    } catch (e) {
      console.error(e)
    } finally {
      await client.deleteSession()
    }
  } catch (e) {
    console.error(e)
  }
}

main()
