const shake = async client => {
  return await client.shake()
}

module.exports = {
  Android: shake,
  iOS: shake
}
