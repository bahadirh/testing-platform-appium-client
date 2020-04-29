require('dotenv').config()

const requiredParams = ['RABBITMQ_URL', 'RABBITMQ_USER', 'RABBITMQ_PASS']

requiredParams.forEach(param => {
  if (!process.env[param]) {
    throw new Error(`Required param ${param} is missing.`)
  }
})
