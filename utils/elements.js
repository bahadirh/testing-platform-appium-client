// TODO: not working
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

const clickElement = async (client, selectors) => {
  const element = await getElement(client, selectors)
  return clickGivenElement(element)
}

const tryAction = async (
  action,
  errHandler = err => console.log(err.message)
) => {
  try {
    action()
  } catch (error) {
    errHandler(error)
  }
}

const withPrintErrors = (action, ...args) => {
  const { status, data } = tryAction(action, ...args)

  if (!status) {
    console.log(data)
  }
  return data
}

module.exports = {
  clickElement,
  getElement,
  tryAction
  /*// TODO: not working properly
  withPrintErrors
  //*/
}
