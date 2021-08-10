
// importing congfig
const { publicFolder } = require('../../config');

// export modules
module.exports = {

ExceptionTemplate:async(payload)=>{

 const {   
        recipetentName,
        date,
        errMsg,
        errStack,
        memory
       } = payload;

const {
        rss,
        heapTotal,
        heapUsed,
        external,
        arrayBuffers
      } = memory;


const temp =`

<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
.receipt-content .logo a:hover {
  text-decoration: none;
  color: #7793C4; 
}

.receipt-content .invoice-wrapper {
  background: #FFF;
  border: 1px solid #CDD3E2;
  box-shadow: 0px 0px 1px #CCC;
  padding: 40px 40px 60px;
  margin-top: 40px;
  border-radius: 4px; 
}

.receipt-content .invoice-wrapper .payment-details span {
  color: #A9B0BB;
  display: block; 
}
.receipt-content .invoice-wrapper .payment-details a {
  display: inline-block;
  margin-top: 5px; 
}

.receipt-content .invoice-wrapper .line-items .print a {
  display: inline-block;
  border: 1px solid #9CB5D6;
  padding: 13px 13px;
  border-radius: 5px;
  color: #708DC0;
  font-size: 13px;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear; 
}

.receipt-content .invoice-wrapper .line-items .print a:hover {
  text-decoration: none;
  border-color: #333;
  color: #333; 
}

.receipt-content {
  background: #ECEEF4; 
}
@media (min-width: 1200px) {
  .receipt-content .container {width: 900px; } 
}

.receipt-content .logo {
  text-align: center;
  margin-top: 50px; 
}

.receipt-content .logo a {
  font-family: Myriad Pro, Lato, Helvetica Neue, Arial;
  font-size: 36px;
  letter-spacing: .1px;
  color: #555;
  font-weight: 300;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear; 
}

.receipt-content .invoice-wrapper .intro {
  line-height: 25px;
  color: #444; 
}

.receipt-content .invoice-wrapper .payment-info {
  margin-top: 25px;
  padding-top: 15px; 
}

.receipt-content .invoice-wrapper .payment-info span {
  color: #A9B0BB; 
}

.receipt-content .invoice-wrapper .payment-info strong {
  display: block;
  color: #444;
  margin-top: 3px; 
}

@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .payment-info .text-right {
  text-align: left;
  margin-top: 20px; } 
}
.receipt-content .invoice-wrapper .payment-details {
  border-top: 2px solid #EBECEE;
  margin-top: 30px;
  padding-top: 20px;
  line-height: 22px; 
}


@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .payment-details .text-right {
  text-align: left;
  margin-top: 20px; } 
}
.receipt-content .invoice-wrapper .line-items {
  margin-top: 40px; 
}
.receipt-content .invoice-wrapper .line-items .headers {
  color: #A9B0BB;
  font-size: 13px;
  letter-spacing: .3px;
  border-bottom: 2px solid #EBECEE;
  padding-bottom: 4px; 
}
.receipt-content .invoice-wrapper .line-items .items {
  margin-top: 8px;
  border-bottom: 2px solid #EBECEE;
  padding-bottom: 8px; 
}
.receipt-content .invoice-wrapper .line-items .items .item {
  padding: 10px 0;
  color: #696969;
  font-size: 15px; 
}
@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .line-items .items .item {
  font-size: 13px; } 
}
.receipt-content .invoice-wrapper .line-items .items .item .amount {
  letter-spacing: 0.1px;
  color: #84868A;
  font-size: 16px;
 }
@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .line-items .items .item .amount {
  font-size: 13px; } 
}

.receipt-content .invoice-wrapper .line-items .total {
  margin-top: 30px; 
}

.receipt-content .invoice-wrapper .line-items .total .extra-notes {
  float: left;
  width: 40%;
  text-align: left;
  font-size: 13px;
  color: #7A7A7A;
  line-height: 20px; 
}

@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .line-items .total .extra-notes {
  width: 100%;
  margin-bottom: 30px;
  float: none; } 
}

.receipt-content .invoice-wrapper .line-items .total .extra-notes strong {
  display: block;
  margin-bottom: 5px;
  color: #454545; 
}

.receipt-content .invoice-wrapper .line-items .total .field {
  margin-bottom: 7px;
  font-size: 14px;
  color: #555; 
}

.receipt-content .invoice-wrapper .line-items .total .field.grand-total {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500; 
}

.receipt-content .invoice-wrapper .line-items .total .field.grand-total span {
  color: #20A720;
  font-size: 16px; 
}

.receipt-content .invoice-wrapper .line-items .total .field span {
  display: inline-block;
  margin-left: 20px;
  min-width: 85px;
  color: #84868A;
  font-size: 15px; 
}

.receipt-content .invoice-wrapper .line-items .print {
  margin-top: 50px;
  text-align: center; 
}



.receipt-content .invoice-wrapper .line-items .print a i {
  margin-right: 3px;
  font-size: 14px; 
}

.receipt-content .footer {
  margin-top: 40px;
  margin-bottom: 110px;
  text-align: center;
  font-size: 12px;
  color: #969CAD; 
}                    
</style>
</head>
<body>

<div class="receipt-content">
<div class="container bootstrap snippets bootdey">
<div class="row">
<div class="col-md-12">
<div class="invoice-wrapper" style="border-bottom: none;">

<center> <img src="${publicFolder}logo.png"/> </center>


<div class="intro" >
Hi <strong>${recipetentName}</strong>, 
<br><strong>
<h1 style="color: #d81e74a3 ">
Server Detected New Uncaught Exceptions
</h1>
</strong> .
</div>

<div class="payment-info"style="
margin-top: -20px;">
<div class="row">
<div class="col-sm-6">

<a href="#" 
style="text-decoration: none
;margin-bottom: 10px;
font-size: 22px;margin-top: -20px;
">
Date And Time
</a>
<strong style="color: #9CB5D6;   font-weight: 400;
font-size: 17px;">${date}</strong>
</div>
<div class="col-sm-6 text-right">


</div>
</div>
</div>

<div class="payment-details" style="">
<div class="row">
<div class="col-sm-12" style="color: #9CB5D6;;">




<table class="table  table-responsive" 
style="line-height: 30px;   font-weight: 400;
font-size: 18px;border-top:none">

    <tbody style="color: #9CB5D6;   font-weight: 400;
font-size: 17px;text-align:left;border-top:none">
      <tr style="border-top:none">
        <td style="min-width:250px;"><a href="#" 
style="text-decoration: none
;margin-bottom: 10px;
font-size: 22px;
">
Memory Usage
</a></td>
        <td style="min-width:250px"><a href="#" 
style="text-decoration: none
;margin-bottom: 10px;
font-size: 22px;
">
Stats
</a></td>

      </tr>



<tr>
<td>RSS</td>
<td>${rss}</td>
</tr>

<tr>
<td>HeapTotal</td>
<td>${heapTotal}</td>
</tr>

<tr>
<td>HeapUsed</td>
<td>${heapUsed} </td>
</tr>

<tr>
<td>External</td>
<td>${external}</td>
</tr>

<tr>
<td>ArrayBuffers</td>
<td>${arrayBuffers}</td>
</tr>




    </tbody>
  </table>





</div>

</div>
</div>
<!-- Error Message -->
<div class="payment-details">
<div class="row">
<div class="col-sm-12" style="color: #9CB5D6;;">

<a href="#" 
style="text-decoration: none
;margin-bottom: 10px;
font-size: 22px;
">
Error Message
</a>
<p style="line-height: 30px;   font-weight: 400;
font-size: 18px;">
 ${errMsg}

</p>
</div>

</div>
</div>
<!-- Error Stack -->
<div class="payment-details" style="border-bottom: 2px solid #EBECEE;">
<div class="row">
<div class="col-sm-12" style="color: #9CB5D6;;">

<a href="#" 
style="text-decoration: none
;margin-bottom: 10px;
font-size: 22px;
">
Error Stack
</a>
<p style="line-height: 30px;    font-weight: 400;
font-size: 18px;">
 ${errStack}
</p>
</div>

</div>
</div>



</div>


</div>
</div>
</div>
</div>                    
</body>
</html>

`;

return temp;

}


}