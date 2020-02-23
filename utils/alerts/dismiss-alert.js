const dismissAlertOnAndroid = async (client, ignoreErrors = true) => {
  try {
    return await client.dismissAlert()
  } catch (error) {
    if (!ignoreErrors) {
      throw error
    } else {
      return error
    }
  }
}

const dismissAlertOnIOS = async (client, ignoreErrors = true) => {
  try {
    return await client.dismissAlert()
  } catch (error) {
    if (!ignoreErrors) {
      throw error
    } else {
      return error
    }
  }
}

module.exports = {
  Android: dismissAlertOnAndroid,
  iOS: dismissAlertOnIOS
}
