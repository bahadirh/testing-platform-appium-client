const acceptAlert = async (client, { ignoreErrors = true }) => {
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
  Android: acceptAlert,
  iOS: acceptAlert,
}
