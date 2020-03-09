const setVariable = (client, name, value) => {
  client.variables[name] = value
  return client.variables
}

module.exports = {
  Android: setVariable,
  iOS: setVariable
}
