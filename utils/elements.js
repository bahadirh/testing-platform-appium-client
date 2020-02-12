const getElement = (client, selectors) => {
  const selectorStr = selectors.reduce((str, selector) => {
    let newStr = `${str}.${selector[0]}(`
    if (selector.length > 1) {
      newStr = `${newStr}"${selector[1]}"`
    }
    return `${newStr})`
  }, 'android=new UiSelector()')
  return client.$(selectorStr)
}

const clickGivenElement = el => {
  return el.click()
}

// TODO: make passing client each time optional by using closures
const clickElement = async (client, selectors) => {
  const element = await getElement(client, selectors)
  return clickGivenElement(element)
}

const tryAction = async (
  action,
  errHandler = err => console.log(err.message)
) => {
  try {
    await action()
  } catch (error) {
    errHandler(error)
  }
}

const waitUntilDone = async (fn, repeat = 50) => {
  for (let i = 0; i < repeat; i++) {
    try {
      await fn()
      return
    } catch (error) {}
  }
}

const verifyElement = async (client, selectors) => {
  const element = await getElement(client, selectors)
  console.log(element)
}

module.exports = {
  clickElement,
  getElement,
  tryAction,
  verifyElement,
  waitUntilDone
}
