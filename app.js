const wdio = require('webdriverio')
const assert = require('assert')

const { clickElement, getElement, tryAction } = require('./utils')

const opts = {
  logLevel: 'silent',
  // logLevel: 'error',
  port: 4723,
  capabilities: {
    acceptInsecureCerts: true,
    allowTestPackages: true,
    // app: `${__dirname}/apk/ApiDemos-debug.apk`,
    appActivity: 'com.cloudflare.app.presentation.main.MainActivity',
    // appName: 'API Demos',
    appPackage: 'com.cloudflare.onedotonedotonedotone',
    // appPackage: 'com.turkishairlines.mobile',
    automationName: 'UiAutomator2',
    deviceName: 'Android Emulator',
    // isHeadless: true,  // gives error
    platformName: 'Android',
    platformVersion: '9'
  }
}

// sample with webdriverio
async function main() {
  try {
    const client = await wdio.remote({ ...opts })

    try {
      await clickElement(client, [['text', 'Get started']])
      await clickElement(client, [['text', 'Done']])
      await clickElement(client, [['text', 'Accept']])

      // const element = await client.findElement(
      //   'xpath',
      //   '//android.widget.ImageButton[@content-desc="Guide"]'
      // )
      // await element.click()

      // check user guide and go back
      await clickElement(client, [
        ['resourceId', 'com.cloudflare.onedotonedotonedotone:id/guideBtn']
      ])

      await clickElement(client, [['text', 'Done']])

      // change the service to 1.1.1.1 only
      await clickElement(client, [
        ['resourceId', 'com.cloudflare.onedotonedotonedotone:id/settingsBtn']
      ])

      await clickElement(client, [
        [
          'resourceId',
          'com.cloudflare.onedotonedotonedotone:id/settingsAppModeNoWarp'
        ]
      ])

      // change theme to dark
      await clickElement(client, [['text', 'More settings']])
      await clickElement(client, [['text', 'Use dark theme']]) // should do nothing
      const darkThemeSwitch = await getElement(client, [
        ['resourceId', 'com.cloudflare.onedotonedotonedotone:id/darkModeSwitch']
      ])
      console.log(await darkThemeSwitch.getText())
      await clickElement(client, [
        ['resourceId', 'com.cloudflare.onedotonedotonedotone:id/darkModeSwitch']
      ])

      await clickElement(client, [['descriptionMatches', 'Navigate up']])

      await client.back()
    } catch (error) {
      await console.log(error.message)
    }

    await client.deleteSession()
  } catch (error) {
    console.log(error.message)
  }
  // await getStartedButton.click()
  /*
  // accept terms of service if there's an accept button of it
  tryAction(() => clickElement(client, [['text', 'Accept']]))

  // skip initial screens specific to running the app for the first time
  tryAction(() => clickElement(client, [['text', 'Get started']]))
  console.log('\n\n\nhere\n\n\n')
  tryAction(() => clickElement(client, [['text', 'Done']]))
  tryAction(() => clickElement(client, [['text', 'Accept']]))

  // const element = await client.findElement(
  //   'xpath',
  //   '//android.widget.ImageButton[@content-desc="Guide"]'
  // )
  // await element.click()

  // check user guide and go back
  tryAction(() =>
    clickElement(client, [
      ['resourceId', 'com.cloudflare.onedotonedotonedotone:id/guideBtn']
    ])
  )
  tryAction(() => clickElement(client, [['text', 'Done']]))

  // change the service to 1.1.1.1 only
  tryAction(() =>
    clickElement(client, [
      ['resourceId', 'com.cloudflare.onedotonedotonedotone:id/settingsBtn']
    ])
  )
  tryAction(() =>
    clickElement(client, [
      [
        'resourceId',
        'com.cloudflare.onedotonedotonedotone:id/settingsAppModeNoWarp'
      ]
    ])
  )
  // change theme to dark
  tryAction(() => clickElement(client, [['text', 'More settings']]))
  tryAction(() => clickElement(client, [['text', 'Use dark theme']])) // should do nothing
  tryAction(() =>
    clickElement(client, [
      ['resourceId', 'com.cloudflare.onedotonedotonedotone:id/darkModeSwitch']
    ])
  )
  tryAction(() => clickElement(client, [['descriptionMatches', 'Navigate up']]))
  await client.back()
  //*/
  // take the screenshot of the main screen
  // const ss = await client.saveScreenshot(
  //   `${__dirname}/screenshots/${new Date().getTime()}`
  // )

  // await client.deleteSession()
}

main()
/*
com.cloudflare.onedotonedotonedotone:id/settingsBtn
com.cloudflare.onedotonedotonedotone:id/settingsAppModeNoWarp
client back
*/
