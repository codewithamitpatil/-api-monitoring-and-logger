const Transport = require('winston-transport');

// importing global config
const { adminMail } = require('../config'); 

// importing mail Handler
const { SendMail } = require('./../middlewares/mailHandler');

 class Mail extends Transport {
  
    constructor(opts) {
        super(opts);
    }
 
    log(silly, callback) {

     const payload = {
        
        recipetentName:'Amit Patil',
        date:silly.date ,
        errMsg:silly.error.message,
        errStack:silly.stack,
        memory:silly.process.memoryUsage

     };
      
      // we send mail to admin when uncaught
      // exception  occurs
      SendMail(
                 adminMail,
                 'Server Detected New Uncaught Exceptions',
                 'Exception',
                 payload
               );  
      
      callback();
    }
};

module.exports = Mail;
 