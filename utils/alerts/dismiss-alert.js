const dismissAlert = async (client, { ignoreErrors = true }) => {
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
  Android: dismissAlert,
  iOS: dismissAlert,
}
