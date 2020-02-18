const tryAction = async (
  client,
  action,
  errHandler = err => console.log(err.message)
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
