
const moment = require('moment'),
      fs     =   require('fs'),
      { 
        logLevel ,
        logPath
      } = require('./../config/config'),
      { 
        createLogger,
        format,
        transports
      } = require('winston'),
      { 
        combine,
        timestamp ,
        colorize ,
        errors, 
        printf 
      } = format;


const BuildDevLogger = () => {

// ensure log directory exists
fs.existsSync(logPath) || fs.mkdirSync(logPath)


// custom date 
const DATE = moment().format('YYYY-MM-DD');
const TIME = moment().format('HH:MM:SS');

// log format
const myFormat = printf(({ level, message, timestamp , stack }) => {
  return `${timestamp}  ${level}: ${ stack || message}`;
});

return createLogger({
    level:logLevel,
    format: combine(
                    colorize(), 
                    timestamp({format:'YYYY-MM-DD HH:MM:SS'}),
                    errors({stack :true}) ,   
                    myFormat
                ),
    defaultMeta: { date:DATE ,time:TIME },
    transports: [
                    new transports.Console(),
                    new transports.File({
                               filename: logPath +'DevError.logs', 
                               handleExceptions: false
                    })
                ],
    exceptionHandlers: [
                          new transports.File({
                               filename: logPath +'DevException.logs', 
                               handleExceptions: true
                            })
                        ],
    exitOnError: false
      
});

}


// export
module.exports = BuildDevLogger;