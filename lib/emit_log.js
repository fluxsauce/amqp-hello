const amqp = require('amqplib/callback_api');

module.exports = (message) => {
  amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      const ex = 'logs';

      ch.assertExchange(ex, 'fanout', { durable: false });
      ch.publish(ex, '', new Buffer(message));
      console.log(' [x] Sent %s', message);
    });

    setTimeout(() => {
      conn.close(); process.exit(0);
    }, 500);
  });
};
