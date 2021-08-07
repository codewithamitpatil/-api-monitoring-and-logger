
const moment = require('moment'),
      fs     =   require('fs'),
      { 
        logLevel ,
        logPath,       
        mongodb,
        mongodbLogOptions
      } = require('./../config/config'),
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

const  BuildProdLogger = () => {

// ensure log directory exists
fs.existsSync(logPath) || fs.mkdirSync(logPath)

// custom time and date
const DATE = moment().format('YYYY-MM-DD');
const TIME = moment().format('HH:MM:SS');

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
                            filename: logPath +'ProdError.logs', 
                            level: logLevel, 
                            json: true
                    }),

                    new transports.MongoDB({
                      level: logLevel, 
                      db:mongodb,
                      options:mongodbLogOptions,
                      collection:'ProdErrorLogs'
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
                          })
    ],
    exitOnError: false
     
});

}

// export
module.exports = BuildProdLogger;