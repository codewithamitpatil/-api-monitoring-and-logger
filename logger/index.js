
// global configrations
const morgan = require('morgan'),
      moment = require('moment'),
      { 
        env,
        logLevel,
        logPath
      } = require('./../config/config'); 

// logging middlewares
const devLogger = require('./dev-logger'),
      prodLogger = require('./pro-logger');

let logger = null;

if (env === 'development')
{
   logger = devLogger();
}else{
   logger = prodLogger(); 
}


// export module
module.exports = logger; 