# RabbitMQ with Node.js POC

Basic RabbitMQ integration with Node.js using the 'amqplib' package.

## Usage

1. Install Docker and Docker Compose

2. Start the local RabbitMQ instance with Docker Compose in the root folder where the 'docker-compose.yml' file is located:

```bash
sudo docker-compose up
```

3. Open <a href="http://localhost:15672">http://localhost:15672</a> on your browser, then you should see the RabbitMQ UI

4. Type 'guest' for both the username and password

5. Now open a terminal window and start the 'consumer' script that will listen to the messages in the RabbitMQ Queue:

```bash
node consumer.js
```

6. Finally, start the 'producer` script on another terminal window that will send the messages to the queue:

```bash
node producer.js
```

7. You should be able to see the received messages on the 'consumer' terminal window.
