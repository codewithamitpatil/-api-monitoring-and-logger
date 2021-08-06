

const moment = require('moment'),
      fs     =   require('fs'),
      { 
        logLevel ,
        logPath ,
        mongodb,
        mongodbOptions
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
                            filename: logPath +'error.logs', 
                            level: logLevel, 
                            json: true
                    })
        
              ],
    exceptionHandlers: [
                          new transports.File({
                               filename: logPath +'exception.logs', 
                               handleExceptions: true
                            })
    ],
    exitOnError: false
     
});

}

// export
module.exports = BuildProdLogger;