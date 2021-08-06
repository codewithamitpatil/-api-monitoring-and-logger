
const morgan = require('morgan'),
      moment = require('moment'),
      fsr    = require('file-stream-rotator'),
      { 
        env,
        logLevel,
        logPath
      } = require('./../config/config'); 



morgan.token('date', (req, res) => moment().format('YYYY-MM-DD'));
morgan.token('date', (req, res) => moment().format('HH:MM:SS'));

morgan.format('LogFormat', '[:date]":remote-addr :method :url" :status :res[content-length] - :response-time ms');

const accessLogStream = fsr.getStream({
  filename: logPath + '/access-%DATE%.logs',
  frequency: 'daily', 
  verbose: false
});

// export module
module.exports = app => app.use(morgan('LogFormat', {stream: accessLogStream}));

