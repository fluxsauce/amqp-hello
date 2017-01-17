# amqp-hello

RabbmitMQ amqp.node sandbox, based on the [official tutorial](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html).

## Installation

```bash
# Use Node.js 6 or higher.
nvm use
# Install RabbitMQ locally on MacOS with Homebrew.
brew install rabbitmq
# Start the RabbitMQ server
rabbitmq-server
```

The RabbitMQ Management Plugin will be at http://localhost:15672 (login/pass `guest`).

## Usage

Send messages to the queue:

```bash
./index.js send
```

Recieve messages from the queue:

```bash
./index.js recieve
```