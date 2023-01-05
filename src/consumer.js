const amqplib = require('amqplib/callback_api')

const QUEUE = 'tasks'

amqplib.connect(
	'amqp://localhost:5672',
	(rabbitmqConnectionError, rabbitmqConnection) => {
		if (rabbitmqConnectionError) throw rabbitmqConnectionError

		rabbitmqConnection.createChannel((channelError, channel) => {
			if (channelError) throw channelError

			channel.assertQueue(QUEUE)

			channel.consume(QUEUE, (message) => {
				if (message !== null) {
					console.log(`[CONSUMER] Received: ${message.content.toString()}`)
					channel.ack(message)
				} else {
					console.log('Consume cancelled by the server')
				}
			})
		})
	}
)
