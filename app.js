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
    // app: `${__dirname}/apk/turkish-airlines-1-10-0.apk`,
    // appActivity: 'com.cloudflare.app.presentation.main.MainActivity',
    appActivity: 'ui.main.MainActivity',
    // appName: 'API Demos',  // TODO: An unknown server-side error occurred while processing the command. Original error: activity and pkg are required to start an application
    // appPackage: 'io.appium.android.apis',
    // appPackage: 'com.cloudflare.onedotonedotonedotone',
    appPackage: 'com.turkishairlines.mobile',
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
      if ((await darkThemeSwitch.getText()) != 'ON') {
        await darkThemeSwitch.click()
      }

      // back to main menu
      await clickElement(client, [['descriptionMatches', 'Navigate up']])
      await client.back()

      try {
        await client.acceptAlert()
      } catch (error) {
        console.log(error.message)
      }

      // turn it on
      const turnSwitch = await getElement(client, [
        ['resourceId', 'com.cloudflare.onedotonedotonedotone:id/launchSwitch']
      ])
      if ((await turnSwitch.getText()) == 'OFF') {
        await turnSwitch.click()
        // there might be an optional permission request
        try {
          await clickElement(client, [['text', 'Install VPN profile']])
          await clickElement(client, [['text', 'OK']])
        } catch (error) {
          // console.log(error.message)
        }

        // TODO: take screenshot here
        console.log(
          await (
            await getElement(client, [
              [
                'resourceId',
                'com.cloudflare.onedotonedotonedotone:id/connectionStateTv'
              ]
            ])
          ).getText()
        )
      }

      // turn it off
      if ((await turnSwitch.getText()) == 'ON') {
        await turnSwitch.click()

        // may be asked for how long it should be off
        try {
          await clickElement(client, [['text', 'Until I turn it back on']])
        } catch (error) {
          console.log(error.message)
        }
        // TODO: take screenshot
      }
    } catch (error) {
      console.log(error.message)
    }

    await client.deleteSession()
  } catch (error) {
    console.log(error.message)
  }
}

main()
