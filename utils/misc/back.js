const back = async client => {
  return await client.back()
}

module.exports = {
  Android: back,
  iOS: back,
}
