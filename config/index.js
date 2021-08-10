// for development
const development = {
  env:'development',
  port: process.env.PORT || 3000,
  // for logger
  logLevel:'silly',
  logPath : './logs/', 
  // for mongodb
  mongodb: 'mongodb://localhost:27017/task1',
  mongodbOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  // for nodemailer
  nodemailerOptions:{
      service: "gmail",
      auth:{
            user: 'amitwebdev2019@gmail.com',
            pass: '8888565473'
           } ,
      tls: {
            rejectUnauthorized: false
           }
  },
  adminMail:'amitwebdev2019@gmail.com',
  // static folder path
  publicFolder:'http://localhost:3001/'


};

// for production
const production = {
  env:'production',
  logLevel:'silly',
  logPath : './logs/',
  port: process.env.PORT || 3001,
  mongodb:'mongodb+srv://amit_1:Amit123@authentication.qq25p.mongodb.net/auth?retryWrites=true&w=majority',
  mongodbOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
    mongodbLogOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
    // for nodemailer
  nodemailerOptions:{
      service: "gmail",
      auth:{
            user: 'amitwebdev2019@gmail.com',
            pass: '8888565473'
           } ,
      tls: {
            rejectUnauthorized: false
           }
  },
  adminMail:'amitwebdev2019@gmail.com',
  // static folder path
  publicFolder:'https://apibuckets.herokuapp.com/'

};


const isProduction =true;

if (isProduction){
   console.log('Production Env');
}else{
   console.log('Development Env');
}

// module exports
module.exports = isProduction
  ? { ...production  }
  : { ...development };
