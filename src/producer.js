const amqplib = require('amqplib/callback_api')

const queue = 'tasks'

const SEND_MSG_INTERVAL = 2000
let msgCount = 1

amqplib.connect('amqp://localhost:5672', (err, conn) => {
	if (err) throw err

	conn.createChannel((err, ch1) => {
		if (err) throw err

		ch1.assertQueue(queue)

		setInterval(() => {
			const newMessage = `Message #${msgCount} (Elapsed time: ${
				(SEND_MSG_INTERVAL * msgCount) / 1000
			} seconds)`
			ch1.sendToQueue(queue, Buffer.from(newMessage))
			msgCount += 1
		}, SEND_MSG_INTERVAL)
	})
})
