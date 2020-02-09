const wdio = require('webdriverio')
const assert = require('assert')

const opts = {
  port: 4723,
  capabilities: {
    platformName: 'Android',
    platformVersion: '9',
    deviceName: 'Android Emulator',
    app: `${__dirname}/apk/ApiDemos-debug.apk`,
    appPackage: 'io.appium.android.apis',
    // appActivity: '.view.TextFields',
    automationName: 'UiAutomator2'
  }
}

async function main() {
  const client = await wdio.remote(opts)

  const viewsWithSelector = await client.$(
    `android=new UiSelector().text("Text")`
  )
  await viewsWithSelector.click()

  const views = await client.$('~Views')
  await views.click()

  const textFields = await client.$('android.widget.TextView')
  await textFields.click()

  const field = await client.$('android.widget.EditText')
  await field.setValue('Hello World!')
  const value = await field.getText()
  assert.equal(value, 'Hello World!')

  await client.deleteSession()
}

main()
