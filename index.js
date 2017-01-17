#!/usr/bin/env node

// Graceful failure if using the wrong version of node.
if (process.version.split('.')[0].replace('v', '') < 6) {
  console.log('count-down requires node.js 6 or higher.');
  process.exit(1);
}

const task = require('./lib/task');
const worker = require('./lib/worker');

const queueName = Object.freeze('task_queue');

// Commands.
switch (process.argv[2]) {
  case 'task':
    task(queueName, process.argv.slice(3).join(' ') || 'Hello World!');
    break;

  case 'worker':
    worker(queueName);
    break;

  default:
    throw new TypeError('Unexpected input');
}
