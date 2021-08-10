
const moment = require('moment'),
      fs     =   require('fs'),
      { 
        logLevel ,
        logPath,       
        mongodb,
        mongodbLogOptions
      } = require('../config'),
      { 
        createLogger,
        format,
        transports
      } = require('winston'),
      { 
        combine, 
        timestamp,
        errors ,
        json
      } = format;


// for storeing logs in mongodb
require('winston-mongodb');


// importing custom mail transport
const  Mail  = require('./mailTransport');


const  BuildProdLogger = () => {

// ensure log directory exists
fs.existsSync(logPath) || fs.mkdirSync(logPath)

// custom time and date
const DATE = moment().format('YYYY-MM-DD');
const TIME = moment().format('HH:MM:SS');

// intialize logger
return createLogger({
    level:logLevel,
    format: combine(
                    timestamp(),
                    errors({stack :true}) ,
                    json()
                ),
    defaultMeta: { date:DATE ,time:TIME },
    transports: [
                    new transports.File({ 
                            filename: logPath +'Logs.logs', 
                            level: logLevel, 
                            json: true
                    }),

                    new transports.MongoDB({
                      level: logLevel, 
                      db:mongodb,
                      options:mongodbLogOptions,
                      collection:'ProdLogs'
                    })
  
        
              ],
    exceptionHandlers: [ 
                          new transports.File({
                               filename: logPath +'ProdException.logs', 
                               handleExceptions: true
                          }),
                          new transports.MongoDB({
                              level: logLevel, 
                              db:mongodb,
                              options:mongodbLogOptions,
                              collection:'ProdExceptionLogs'
                          }),
                          new Mail() 
    ],
    exitOnError: false
     
});

}

// export
module.exports = BuildProdLogger;