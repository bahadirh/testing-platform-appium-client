/**
 * Returns a previously-declared variable, `undefined` when undefined.
 * @param {*} client Device connection instance
 * @param {String} name identifier
 */
const getVariable = (client, name) => {
  return client.variables[name]
}

module.exports = {
  Android: getVariable,
  iOS: getVariable
}
