const hideKeyboard = async client => {
  return await client.hideKeyboard()
}

module.exports = {
  Android: hideKeyboard,
  iOS: hideKeyboard
}
