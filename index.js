#!/usr/bin/env node

// Graceful failure if using the wrong version of node.
if (process.version.split('.')[0].replace('v', '') < 6) {
  console.log('count-down requires node.js 6 or higher.');
  process.exit(1);
}

const amqp = require('amqplib/callback_api');

// Commands.
switch (process.argv[2]) {
  case 'send':
    amqp.connect('amqp://localhost', (err, conn) => {
      conn.createChannel((err, ch) => {
        const q = 'hello';
        const msg = 'Hello World!';

        ch.assertQueue(q, { durable: false });
        ch.sendToQueue(q, Buffer.from(msg));
        console.log(' [x] Sent %s', msg);
      });
      setTimeout(() => {
        conn.close(); process.exit(0);
      }, 500);
    });
    break;

  case 'receive':
    amqp.connect('amqp://localhost', (err, conn) => {
      conn.createChannel((err, ch) => {
        const q = 'hello';

        ch.assertQueue(q, { durable: false });
        console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', q);
        ch.consume(q, (msg) => {
          console.log(' [x] Received %s', msg.content.toString());
        }, { noAck: true });
      });
    });
    break;

  default:
    throw new TypeError('Unexpected input');
}
