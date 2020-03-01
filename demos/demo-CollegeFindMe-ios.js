const fs = require('fs')
const wdio = require('webdriverio')

const utils = require('../utils/v2')

const opts = {
  logLevel: 'silent',
  port: 4723,
  capabilities: {
    app: `${__dirname}/../ipa/CollegeFindMe.app`,
    automationName: 'XCUITest',
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
      element = await _(_.findElement, 'name', 'Use another option')
      await _(_.waitForExist, element, 10000)
      await _(_.clickElement, element)

      element = await _(
        _.findElement,
        'xpath',
        `//*[@name="Continue with email"]`
      )
      await _(_.waitForExist, element)
      await _(_.clickElement, element)

      fs.writeFileSync(`${__dirname}/dump.json`, await _(_.getPageSource))

      await _(_.saveScreenshot, `${__dirname}/../screenshots/ss-ios01.png`)

      element = await _(_.findElement, 'name', 'Your email address')
      await _(_.waitForExist, element)
      await _(_.setValue, element, 'bahadir1@hocamoglu.com')

      element = await _(_.findElement, 'name', 'Continue')
      await _(_.clickElement, element)

      element = await _(
        _.findElement,
        'xpath',
        '//*[@name="RNE__Input__text-input"]'
      )
      await _(_.waitForExist, element, 10000)
      await _(_.setValue, element, 'Vbnasd123')

      element = await _(
        _.findElement,
        'xpath',
        '//*[@name="Welcome  Enter your password Forgot Password? Continue"]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]'
      )
      await _(_.waitForExist, element)
      await _(_.clickElement, element)

      element = await _(_.findElement, 'name', 'Continue')
      await _(_.waitForExist, element)
      await _(_.clickElement, element)
    })
    await client.deleteSession()
  })
}

main()
