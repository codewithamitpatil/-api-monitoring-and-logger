// for development
const development = {
  env:'development',
  logLevel:'silly',
  logPath : './logs/', 
  port: process.env.PORT || 3000,
  mongodb: 'mongodb://localhost:27017/task1',
  mongodbOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
 }

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
  }
};


const isProduction = true;

if (isProduction){
   console.log('Production Env');
}else{
   console.log('Development Env');
}

module.exports = isProduction
  ? { ...production  }
  : { ...development };
