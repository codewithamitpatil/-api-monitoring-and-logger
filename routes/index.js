
const express = require('express');
const router  = express.Router();

const superagent = require('superagent');
const logger = require('../logger');
const asyncHandler = require('../middlewares/asyncHandler');
const myCache = require('./../middlewares/cacheHandler');

 
const { SendMail } = require('./../middlewares/mailHandler');


router.get('/:uid',asyncHandler(  async(req,res,next)=>{

  const uid = req.params.uid;
var data ={};
var tempTodos = [];
 superagent.get(`https://jsonplaceholder.typicode.com/users/${uid}`)
.end((err, user) => {
    if(err)
    {
        logger.error(err);
        next(err);
    }
    const Data = JSON.stringify(user.body);
    const userData = JSON.parse(Data);
    data.id = userData.id;
    data.name =userData.name;
    data.email =userData.email;
    data.phone =userData.phone;
   

  superagent.get(`https://jsonplaceholder.typicode.com/todos`)
.end((err, todo) => {
    if(err)
    {
        logger.error(err);
        next(err);
    }
    const Data = JSON.stringify(todo.body);
    const todoData = JSON.parse(Data);
    
   const filterdTodos = todoData.filter((item)=>{
         return item.userId == uid;
   });

  data.todos =filterdTodos;

 res.status(200).send(data);



  });






  });





})); 


router.get('/mail',asyncHandler( async(req,res,next)=>{
   
   
     const payload = {
        
        recipetentName:'Amit Patil',
        date:'aaa',
        errMsg:'aa',
        errStack:'aaa',
          
  memory: {
    rss: 63287296,
    heapTotal: 36585472,
    heapUsed: 23185680,
    external: 19667780,
    arrayBuffers: 18596793
  }

     };

    const temp = await  SendMail('amitwebdev2019@gmail.com','aaa','Exception',payload).catch((e)=>{
          next(e);
        });

     res.send(temp);
 
}));


// module exports
module.exports = router;
