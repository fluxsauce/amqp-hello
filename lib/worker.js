const amqp = require('amqplib/callback_api');

module.exports = (queueName) => {
  amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      ch.assertQueue(queueName, { durable: true });
      ch.prefetch(1);
      console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queueName);
      ch.consume(queueName, (msg) => {
        console.log(' [x] Received %s', msg.content.toString());
        setTimeout(() => {
          console.log(' [x] Done');
          ch.ack(msg);
        }, Math.random() * 4000);
      });
    });
  });
};
