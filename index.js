
// Server Related
const   express = require('express'),
        cors = require('cors'),
        bodyParser = require('body-parser'),
        helmet = require('helmet'),
        HttpError = require('http-errors')
        ;

// intialize env variables
require('dotenv').config();

// logger
const logger = require('./logger/index');

// global configrations
const { port } = require('./config/config'); 

const app = express();

const statusMonitor = require('./logger/statusMonitor');


app.use(statusMonitor);
// app.use(require('express-status-monitor')({
// chartVisibility: {
//   cpu: true,
//   mem: true,
//   load: true,
//   eventLoop: true,
//   heap: true,
//   responseTime: true,
//   rps: true,
//   statusCodes: true
// }}));

// enable cors
app.use('*',cors());

// Helmet: Set Headers for protection 
app.use(helmet());

// server request logger
require('./logger/morgan-req-logger')(app);

// for json  parsing
app.use(bodyParser.json());

// for urlencode data parsing
app.use(bodyParser.urlencoded({extended:true}));



// demo req
app.get('/:id',async(req,res)=>{

   try{
      
      if(req.params.id > 5)
      {
         throw new HttpError.InternalServerError();
      }
       
      res.status(200).send('hello'); 

   }catch(e)
   {
    // logger.info('hello server ',{name:'aaa'});
    // logger.debug('hello',{name:'aaaa'});

    // logger.error(new HttpError.NotFound());
    logger.error(e);
    res.status(e.status).send(e.message);
   }

});


// start server
app.listen(port,()=>{
     logger.info(`Server is listening on port : ${port}`);
     console.log(`Server is listening on port : ${port}`);
});

