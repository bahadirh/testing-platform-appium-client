require('./config')
const amqp = require('amqplib')
const fs = require('fs').promises
const YAML = require('yaml')

const { RABBITMQ_URL, RABBITMQ_USER, RABBITMQ_PASS } = process.env

const connURL = `amqp://${RABBITMQ_USER}:${RABBITMQ_PASS}@${RABBITMQ_URL}`

amqp
  .connect(connURL)
  .then(async conn => {
    const channel = await conn.createChannel()

    const emulatorConfig = await fs
      .readFile('machines.yaml')
      .then(file => YAML.parse(file.toString()))
    const queues = Object.keys(emulatorConfig).filter(
      queue =>
        emulatorConfig[queue].devices &&
        emulatorConfig[queue].devices.length > 0
    )

    queues.map(async queue => {
      await channel.assertQueue(queue, { durable: true })
      channel.prefetch(emulatorConfig[queue].devices.length)

      channel.consume(queue, msg => {
        console.info(JSON.parse(msg.content.toString()))
        // TODO: run the actual test
        channel.ack(msg) // just do ACK on the message received
      })
    })
  })
  .catch(console.error)
