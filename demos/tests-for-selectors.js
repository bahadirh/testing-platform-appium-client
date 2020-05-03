const wdio = require('webdriverio')

const utils = require('../utils')

const opts = {
  port: 4723,
  capabilities: {
    acceptInsecureCerts: true,
    allowTestPackages: true,
    appActivity: 'main.MainActivity',
    appPackage: 'org.wikipedia',
    automationName: 'Appium',
    deviceName: 'Android Emulator',
    platformName: 'Android',
    platformVersion: '10',
  },
}

async function main() {
  await utils.actionSequence(null, async () => {
    const client = await wdio.remote({ ...opts })
    const _ = utils.platforms.onPlatform(client, utils)

    await _(_.actionSequence, async () => {
      let element
      element = await _(
        _.findElement,
        'resourceId',
        'org.wikipedia:id/fragment_onboarding_skip_button'
      )

      await _(_.waitForExist, element)
      await _(_.clickElement, element)

      // await _(
      //   _.pushFile,
      //   '/sdcard/file.txt',
      //   new Buffer('Please read that file from start to end.').toString(
      //     'base64'
      //   )
      // )

      // await _(_.saveScreenshot, `${__dirname}/ss1.png`)

      element = await _(_.findElement, 'text', 'NO THANKS')
      await _(_.waitForExist, element)
      await _(_.clickElement, element)

      element = await _(_.findElement, 'text', 'GOT IT')
      await _(_.waitForExist, element)
      await _(_.clickElement, element)

      // endtest.io sample
      await _(_.actionSequence, async () => {
        // verify search bar is present
        let element
        element = await _(
          _.findElement,
          'resourceId',
          'org.wikipedia:id/search_container'
        )
        await _(_.waitForExist, element)

        // verify explore icon is present
        element = await _(_.findElement, 'resourceId', 'org.wikipedia:id/icon')
        await _(_.waitForExist, element)

        // tap search input
        element = await _(
          _.findElement,
          'resourceId',
          'org.wikipedia:id/search_container'
        )
        await _(_.clickElement, element)

        // write search input
        element = await _(
          _.findElement,
          'resourceId',
          'org.wikipedia:id/search_src_text'
        )
        await _(_.setValue, element, 'Automated Testing')

        // screenshot
        // await _(_.saveScreenshot, `${__dirname}/ss2.png`)

        // click on the first search result
        element = await _(
          _.findElement,
          'xpath',
          '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.view.ViewGroup[1]'
        )
        await _(_.clickElement, element)

        // screenshot
        // await _(_.saveScreenshot, `${__dirname}/ss3.png`)

        // verify title
        element = await _(_.findElement, 'text', 'Automated Testing Framework')
        await _(_.waitForExist, element, 10000)
      })
    })
    await client.deleteSession()
  })
}

main()
