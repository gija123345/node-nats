module.exports = new errorHandler();

const Transport = require('winston-transport');
const util = require('util');

class NatsTransport extends Transport {
  constructor(opts) {
    super(opts);
    var NATS = require('nats');
    this.nats = NATS.connect();
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info, this.nats);
    });
    callback();
  }
};

const natsTransport = new NatsTransport();
natsTransport.on('logged', (info, nats) => {
  nats.publish('foo', JSON.stringify(info));
});

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.json(),
    winston.format.timestamp(),
    winston.format.prettyPrint(),
  ),
  transports: [
    natsTransport,
    new winston.transports.Console()
  ],
  exceptionHandlers: [
    natsTransport,
    new winston.transports.Console()
  ],
  humanReadableUnhandledException: true,
  exitOnError: false
});

function errorHandler() {
  this.handleError = function (error, reqObj) {
    logger.log({
      'requestObject': reqObj,
      'level': 'error', 
      'message': error.message, 
      'trace': error.stack,
      'pid': process.pid,
      'memory': process.memoryUsage(),
      'uptime': process.uptime(),
      'env': process.env.NODE_ENV || 'development'
    });
    //nats.close();
  }
}