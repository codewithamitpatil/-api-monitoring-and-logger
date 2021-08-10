
const nodemailer   = require('nodemailer');

// importing config
const { nodemailerOptions ,adminMail } = require('../config');

// importing mail templates
const { ExceptionTemplate, LogsTemplate, Template2nd } = require('./../utils/mailTemplate/index');

const transport = nodemailer.createTransport(nodemailerOptions);


// module exports
module.exports = {

SendMail:async(To,Subject,Type,Payload)=>{


   let template;

    switch(Type) {
        case 'Exception':
        template = await ExceptionTemplate(Payload);    
        break;
        case 'Logs':
        template = await LogsTemplate();  
        break;
        default:
        template = await Template2nd();    
    }
    // return template;
    transport.sendMail({
        from: adminMail,
        to: To,
        subject:Subject,
        html: template
    });

}

}