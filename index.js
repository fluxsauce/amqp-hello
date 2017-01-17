#!/usr/bin/env node

// Graceful failure if using the wrong version of node.
if (process.version.split('.')[0].replace('v', '') < 6) {
  console.log('count-down requires node.js 6 or higher.');
  process.exit(1);
}

const task = require('./lib/task');
const worker = require('./lib/worker');
const emitLog = require('./lib/emit_log');
const receiveLogs = require('./lib/receive_logs');

const message = process.argv.slice(3).join(' ') || 'Hello World!';

// Commands.
switch (process.argv[2]) {
  case 'task':
    task('task_queue', message);
    break;

  case 'worker':
    worker('task_queue');
    break;

  case 'emit_log':
    emitLog(message);
    break;

  case 'receive_logs':
    receiveLogs();
    break;

  default:
    throw new TypeError('Unexpected input');
}
