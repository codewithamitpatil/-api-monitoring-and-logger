
// Server Related
const   express = require('express'),
        cors = require('cors'),
        bodyParser = require('body-parser'),
        helmet = require('helmet'),
        HttpError = require('http-errors'),
        compression = require('compression')
         ;



//const swStats = require('swagger-stats');
//const apiSpec = require('swagger.json');

// intialize env variables
require('dotenv').config();

// importing logger
const logger = require('./logger/index'),
      statusMonitor = require('./logger/statusMonitor');

// importing error handler middleware
const {
        ErrorResponse ,
        ErrorTemplate 
      } = require('./middlewares/errorHandler');

// importing api routes 
const apiRoutes = require('./routes/index');

// global configrations
const { port } = require('./config'); 

// intialize app
const app = express();

// server health monitor
app.use(statusMonitor);


//app.use(swStats.getMiddleware({

//}));



// enable cors
app.use('*',cors());

// Helmet: Set Headers for protection 
app.use(helmet());

// compress all
app.use(compression());

// server request logger
require('./logger/morgan-req-logger')(app);

// static folder intialize
app.use(express.static('./public'));

// for json  parsing
app.use(bodyParser.json());

// for urlencode data parsing
app.use(bodyParser.urlencoded({extended:true}));

// intialize api routes
app.use('/api',apiRoutes);



app.get('/:id', (req, res) => {
  if(req.params.id > 5){
  return  res.status(400).send(req.body.name);
  }
  const animal = 'elephant';
  res.send(animal.repeat(1000));
});


//  404 error handler
app.all('*',ErrorTemplate);

// global error handler
app.use(ErrorResponse);

// start server
app.listen(port,()=>{
      logger.info(`Server is listening on port : ${port}`);
});

