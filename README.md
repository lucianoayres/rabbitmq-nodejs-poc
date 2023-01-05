# RabbitMQ with Node.js POC

Basic RabbitMQ integration with Node.js using the [amqplib](https://www.npmjs.com/package/amqplib) library.

## Required Dependencies
- Docker
- Docker Compose

## Usage

1. Clone this project and install its dependencies with yarn or npm:

```bash
yarn 
```
-- or --
```bash
npm install
```

2. Start the local RabbitMQ instance with Docker Compose in the root folder where the `docker-compose.yml` file is located:

```bash
sudo docker-compose up
```

3. Open <a href="http://localhost:15672">http://localhost:15672</a> on your browser, then you should see the RabbitMQ UI

4. Type `guest` for both the username and password

5. Now open a terminal window and start the `consumer` script, located in the `src` directory, that will listen to the messages in the RabbitMQ Queue:

```bash
node consumer.js
```

6. Finally, start the `producer` script on another terminal window that will send the messages to the queue:

```bash
node producer.js
```

7. You should be able to see the received messages on the `consumer` terminal window and also the incoming activity on the RabbitMQ admin panel running on the browser.
