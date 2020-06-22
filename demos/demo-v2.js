const wdio = require('webdriverio')

const utils = require('../utils')

const opts = {
  // logLevel: 'silent',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    platformVersion: '10',
    deviceName: 'Android Emulator',
    app: `${__dirname}/../apk/ApiDemos-debug.apk`,
    // appPackage: 'io.appium.android.apis',
    // appActivity: '.view.TextFields',
    automationName: 'UiAutomator2',
  },
}
wdio
  .remote(opts)
  .then(async client => {
    const _ = utils.platforms.onPlatform(client, utils)

    await _(_.clickElement, {
      elementSelector: 'Views',
      selectElementBy: 'text',
    })

    await _(_.setValue, {
      elementSelector: 'android.widget.EditText',
      selectElementBy: 'className',
      value: 'Hello world!',
    })
    await _(_.assertTextEqualsTo, {
      elementSelector: 'android.widget.EditText',
      selectElementBy: 'className',
      value: 'Hello world!',
    })

    return client
  })
  .then(client => {
    return client.deleteSession()
  })
  .catch(err => {
    console.error(err)
  })
