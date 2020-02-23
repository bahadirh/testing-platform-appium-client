const acceptAlertOnAndroid = async (client, ignoreErrors = true) => {
  try {
    return await client.acceptAlert()
  } catch (error) {
    if (!ignoreErrors) {
      throw error
    } else {
      return error
    }
  }
}

const acceptAlertOnIOS = async (client, ignoreErrors = true) => {
  try {
    return await client.acceptAlert()
  } catch (error) {
    if (!ignoreErrors) {
      throw error
    } else {
      return error
    }
  }
}

module.exports = {
  Android: acceptAlertOnAndroid,
  iOS: acceptAlertOnIOS
}
