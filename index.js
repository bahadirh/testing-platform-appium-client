require('./config')
const amqp = require('amqplib')
const fs = require('fs').promises
const YAML = require('yaml')
const { client } = require('./utils').minio
const runner = require('./runner')

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

    await channel.assertQueue('results', { durable: true })

    queues.map(async queue => {
      await channel.assertQueue(queue, { durable: true })
      channel.prefetch(emulatorConfig[queue].devices.length)

      channel.consume(queue, async msg => {
        const spec = JSON.parse(msg.content.toString())
        // TODO: run the actual test
        const fileDir = `${__dirname}/tmp/${spec._id}/${spec.buildFile}`

        console.info(spec)

        await client.fGetObject(spec.owner, spec.buildFile, fileDir)
        const resultsMsg = {
          test_id: spec._id,
          results: await runner(spec.testCase, fileDir),
          owner: spec.owner,
        }
        // TODO: do file cleanup

        channel.sendToQueue(
          'results',
          Buffer.from(JSON.stringify(resultsMsg)),
          {
            persistent: true,
          }
        )

        channel.ack(msg) // just do ACK on the message received
      })
    })
  })
  .catch(console.error)
