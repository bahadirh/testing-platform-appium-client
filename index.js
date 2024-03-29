require('./config')
const amqp = require('amqplib')
const fs = require('fs')
const YAML = require('yaml')
const { client } = require('./utils').minio
const runner = require('./runner')

const { RABBITMQ_URL, RABBITMQ_USER, RABBITMQ_PASS } = process.env

const connURL = `amqp://${RABBITMQ_USER}:${RABBITMQ_PASS}@${RABBITMQ_URL}`

amqp
  .connect(connURL)
  .then(async conn => {
    const channel = await conn.createChannel()

    const emulatorConfig = await fs.promises
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
        try {
          const spec = JSON.parse(msg.content.toString())

          const tmpDir = `${__dirname}/tmp/${spec._id}`
          const fileDir = `${tmpDir}/${spec.buildFile}`
          const screenshotDir = `${tmpDir}/screenshots`
          if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, { recursive: true })
          }

          await client.fGetObject(spec.owner, spec.buildFile, fileDir)

          const results = await runner(spec.testCase, fileDir, screenshotDir)
          await Promise.all(
            results.state.map(step => {
              return client.fPutObject(
                spec.owner,
                `${spec._id}/${step.screenshotFilename}`,
                `${screenshotDir}/${step.screenshotFilename}`
              )
            })
          )

          const resultsMsg = {
            test_id: spec._id,
            results,
            owner: spec.owner,
          }
          // file cleanup
          fs.rmdirSync(tmpDir, { recursive: true })
          channel.sendToQueue(
            'results',
            Buffer.from(JSON.stringify(resultsMsg)),
            {
              persistent: true,
            }
          )

          channel.ack(msg) // just do ACK on the message received
        } catch (error) {
          channel.nack(msg)
        }
      })
    })
  })
  .catch(console.error)
