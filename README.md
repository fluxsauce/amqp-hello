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

The RabbitMQ Management Plugin will be at [http://localhost:15672](http://localhost:15672), login/pass `guest`.

## Usage

### Work Queue

Create tasks:

```bash
./index.js task
```

Create multiple tasks:

```bash
for i in {1..10}; do ./index.js task Message $i to be consumed; done
```

Start worker:

```bash
./index.js worker
```

### Publish/Subscribe

Emit log:

```bash
./index.js emit_log
```

Receive logs:

```bash
./index.js receive_logs
```
