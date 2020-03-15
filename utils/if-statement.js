const ifStatement = async (
  client,
  condition,
  onSuccess,
  onFailure = () => {}
) => {
  let conditionEvaluated
  if (typeof condition == 'function') {
    conditionEvaluated = condition()
  } else {
    conditionEvaluated = condition
  }

  if (conditionEvaluated) {
    return await onSuccess()
  } else {
    return await onFailure()
  }
}

module.exports = {
  Android: ifStatement,
  iOS: ifStatement
}
