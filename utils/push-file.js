const pushFileForAndroid = async (client, path, data) => {
  return await client.pushFile(path, data)
}

const pushFileForIOS = async (client, path, data) => {
  // TODO: implement pushing files on iOS, if it's possible
}

module.exports = {
  Android: pushFileForAndroid,
  iOS: pushFileForIOS
}
