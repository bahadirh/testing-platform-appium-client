const tryAction = async (
  client,
  action,
  errHandler = err => console.error(err.message)
) => {
  try {
    await action()
  } catch (error) {
    errHandler(error)
  }
}

tryAction['Android'] = tryAction
tryAction['iOS'] = tryAction

module.exports = tryAction
