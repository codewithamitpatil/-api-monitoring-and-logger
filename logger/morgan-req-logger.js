
const morgan = require('morgan'),
      moment = require('moment'),
      fsr    = require('file-stream-rotator'),
      { 
        env,
        logLevel,
        logPath
      } = require('./../config/config'); 

morgan.token('date', (req, res) => moment().format('YYYY-MM-DD HH:MM:SS'));

morgan.format('LogFormat', '[:date]":remote-addr :method :url" :status  - :response-time ms');

const accessLogStream = fsr.getStream({
  filename: logPath + '/access-%DATE%.logs',
  frequency: 'daily', 
  verbose: false
});

// export module

if(env === 'development'){
    module.exports = app => app.use(morgan('dev'));
}else{
   module.exports = app => app.use(morgan('LogFormat', {stream: accessLogStream}));
}
