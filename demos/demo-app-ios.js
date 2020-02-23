const wdio = require('webdriverio')

const utils = require('../utils/v2')

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
  await utils.actionSequence(null, async () => {
    let element
    const client = await wdio.remote({ ...opts })
    const _ = utils.platforms.onPlatform(client, utils)

    await _(_.actionSequence, async () => {
      //   element = await client.$(`XCUIElementTypeTextField`)
      element = await _(_.findElement, 'name', 'emailTextField')

      await element.setValue('ba@ho.com')
    })

    await client.deleteSession()
  })
}

main()
