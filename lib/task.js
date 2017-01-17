const amqp = require('amqplib/callback_api');

module.exports = (queueName, message) => {
  amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      ch.assertQueue(queueName, { durable: true });
      ch.sendToQueue(queueName, Buffer.from(message), { persistent: true });
      console.log(' [x] Sent "%s"', message);
    });
    setTimeout(() => {
      conn.close(); process.exit(0);
    }, 500);
  });
};
