const wdio = require('webdriverio')

const { tryAction } = require('../utils')

const {
  clickElement,
  findElement,
  pushFile,
  platforms,
  waitForElement
} = require('../utils/v2')

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
    const _ = platforms.onPlatform(client)

    const element = await _(
      findElement,
      'resourceId',
      'org.wikipedia:id/fragment_onboarding_skip_button'
    )

    await _(waitForElement, element)
    await _(clickElement, element)

    await _(
      pushFile,
      '/sdcard/file.txt',
      new Buffer('Hello World2').toString('base64')
    )

    /*
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
      await toggle.click()

      await clickElement(client, [['text', 'GET STARTED']])
    })

    // dismiss any alert popped up
    await tryAction(async () => {
      await client.dismissAlert()
    })
    await clickElement(client, [['text', 'GOT IT']])

    // endtest.io sample
    await tryAction(async () => {
      // TODO: save screenshot?
      // const fileBuffer = await client.saveScreenshot(`${__dirname}/ss.png`)

      // verify search bar is present
      let searchBar = await getElement(client, [
        ['resourceId', 'org.wikipedia:id/search_container']
      ])
      await searchBar.waitForExist(10000)

      // verify explore icon is present
      const exploreIcon = await getElement(client, [
        ['resourceId', 'org.wikipedia:id/icon']
      ])
      await exploreIcon.waitForExist(10000)

      // tap search input
      await searchBar.click()

      // write search input
      searchBar = await getElement(client, [
        ['resourceId', 'org.wikipedia:id/search_src_text']
      ])
      await searchBar.setValue('Automated Testing')

      // screenshot?

      // click on the first search result
      // TODO: make use of it further
      const firstResult = await client.findElement(
        'xpath',
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.view.ViewGroup[1]'
      )
      await client.elementClick(firstResult.ELEMENT)

      // screenshot?

      // verify title
      const title = await getElement(client, [
        ['text', 'Automated Testing Framework']
      ])
      await title.waitForExist(10000)
    })
    //*/
    await client.deleteSession()
  })
}

main()
