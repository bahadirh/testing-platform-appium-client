const wdio = require('webdriverio')

const {
  clickElement,
  getElement,
  tryAction,
  waitUntilDone
} = require('../utils')

const opts = {
  logLevel: 'silent',
  port: 4723,
  capabilities: {
    acceptInsecureCerts: true,
    allowTestPackages: true,
    appActivity: 'main.MainActivity',
    appPackage: 'org.wikipedia',
    automationName: 'Appium',
    deviceName: 'Android Emulator',
    platformName: 'Android',
    platformVersion: '9'
  }
}

async function main() {
  await tryAction(async () => {
    const client = await wdio.remote({ ...opts })

    // skip initial tutorial and settings
    await tryAction(async () => {
      await clickElement(client, [
        ['resourceId', 'org.wikipedia:id/fragment_onboarding_forward_button']
      ])
      await clickElement(client, [
        ['resourceId', 'org.wikipedia:id/fragment_onboarding_forward_button']
      ])
      await clickElement(client, [
        ['resourceId', 'org.wikipedia:id/fragment_onboarding_forward_button']
      ])
      // turn off sending usage data
      const toggle = await getElement(client, [
        ['resourceId', 'org.wikipedia:id/view_onboarding_page_switch']
      ])
      console.log(await toggle.getText())
      await toggle.click()

      await clickElement(client, [['text', 'GET STARTED']])
    })

    await client.deleteSession()
  })
}

main()
