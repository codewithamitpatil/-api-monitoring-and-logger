
const logger = require('./../logger/index');

// global error handling middleware
module.exports =
{
 // all error handler
 ErrorResponse:async(err,req,res,next)=>{


    err.status = err.status || 500;
    
    logger.error(`Name    : ${err.name} `);
    logger.error(`Status  : ${err.status} `);
    logger.error(`Message : ${err.message} `);
  
    res.status(err.status).json({
        'status':err.status,
        'msg':err.message
    })

 }
 ,

 // 404 handler
ErrorTemplate:async(req,res,next)=>{

   const template = `
   <style>
/*======================
    404 page
=======================*/

.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height:90%;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
  color: #79889e;
  padding-bottom: 180px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
  margin-top: 10px;
  color: #79889e;
  color: #24ac75;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #24ac75;
  margin: 20px 0;
  display: inline-block;
  text-decoration: none;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.contant_box_404 {
  margin-top: -50px;
}

@media screen and (max-width: 880px) {

.page_404 {
  padding: 00px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height:100%;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.four_zero_four_bg h1 {
  font-size: 30px;
  color: #79889e;
  padding-bottom: 80px;
}



}

@media screen and (max-width: 1380px) {

.page_404 {
  padding: 00px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height:100%;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
}

.four_zero_four_bg h1 {
  font-size: 60px;
  color: #79889e;
  padding-bottom: 120px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #24ac75;
  margin: 20px 0;
  display: inline-block;
  text-decoration: none;
  font-size: 26px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

}
@media screen and (max-width: 1480px) {

.page_404 {
  padding: 00px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height:100%;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
}

.four_zero_four_bg h1 {
  font-size: 60px;
  color: #79889e;
  padding-bottom: 120px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #24ac75;
  margin: 20px 0;
  display: inline-block;
  text-decoration: none;
  font-size: 22px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

}


   </style>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <section class="page_404">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 ">
        <div class="col-sm-12  ">
          <div class="four_zero_four_bg">
            <h1 class="text-center ">404 | Look like you're lost </h1>
            <h3 class="h2">
              
            </h3>
      <a href="/" class="link_404">Go to Home</a>
          
          </div>

       
        </div>
      </div>
    </div>
  </div>
</section>
 `;
   res.setHeader("Content-Security-Policy", "script-src 'self' https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif");

   res.status(404).send(template);


}


}