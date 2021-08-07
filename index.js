
// Server Related
const   express = require('express'),
        cors = require('cors'),
        bodyParser = require('body-parser'),
        helmet = require('helmet'),
        HttpError = require('http-errors');

// logger
const logger = require('./logger/index');

// global configrations
const { port } = require('./config/config'); 

const app = express();

// enable cors
app.use('*',cors());

// Helmet: Set Headers for protection 
app.use(helmet());


// for json  parsing
app.use(bodyParser.json());

// for urlencode data parsing
app.use(bodyParser.urlencoded({extended:true}));

// server req logger
require('./logger/morgan-req-logger')(app);

// env variables
require('dotenv').config();

// demo req
app.get('',async(req,res)=>{



   try{
           throw new HttpError.BadRequest();
           res.status(200).send('hello'); 

   }catch(e)
   {
    // logger.info('hello server ',{name:'aaa'});
    // logger.debug('hello',{name:'aaaa'});

    // logger.error(new HttpError.NotFound());
    logger.error(e);
    res.send(e.message);
   }

});




// start server
app.listen(port,()=>{
    console.log(`Server is listening on port : ${port}`);
});

