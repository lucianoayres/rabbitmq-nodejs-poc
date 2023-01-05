const amqplib = require('amqplib/callback_api')

const queue = 'tasks'

const SEND_MSG_INTERVAL = 2000
let msgCount = 0

amqplib.connect(
	'amqp://localhost:5672',
	(rabbitmqConnectionError, rabbitmqConnection) => {
		if (rabbitmqConnectionError) throw rabbitmqConnectionError

		rabbitmqConnection.createChannel((channelError, channel) => {
			if (channelError) throw channelError

			channel.assertQueue(queue)

			setInterval(() => {
				const newMessage = `Message #${++msgCount} (Elapsed time: ${
					(SEND_MSG_INTERVAL * msgCount) / 1000
				} seconds)`
				channel.sendToQueue(queue, Buffer.from(newMessage))
				console.log(`[PRODUCER] Message #${msgCount} sent`)
			}, SEND_MSG_INTERVAL)
		})
	}
)
