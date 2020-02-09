const { remote } = require('webdriverio')

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
    appActivity: 'ui.main.MainActivity',
    appPackage: 'com.turkishairlines.mobile',
    automationName: 'Appium',
    deviceName: 'Android Emulator',
    platformName: 'Android',
    platformVersion: '9'
  }
}

async function main() {
  try {
    const client = await remote({ ...opts })

    // accept permission alert pop-up if there's one
    await tryAction(() => client.acceptAlert())

    // accept cookies
    await waitUntilDone(() =>
      clickElement(client, [['text', 'Accept Cookies']])
    )

    // search a flight
    await tryAction(async () => {
      await clickElement(client, [['text', 'Book a flight']])
      await clickElement(client, [['text', 'Select']])
      const searchBar = await getElement(client, [['text', 'Search airport']])
      await searchBar.setValue('Istanbul')
      const airports = await client.$$(
        `android=new UiSelector().fromParent(new UiSelector().resourceId("com.turkishairlines.mobile:id/frAirportSelection_lvList"))`
      )
      const relativeLayouts = await client.findElements(
        'id',
        'com.turkishairlines.mobile:id/frAirportSelection_lvList'
      )
    })

    await client.deleteSession()
  } catch (error) {
    console.log(error.message)
  }
}

main()
