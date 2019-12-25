
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */

console.log("Hello World");


/** 2) A first working Express Server */

// app.get('/', (req, res) => {
//   res.send("Hello Express");
// })


/** 3) Serve an HTML file */
//not only can you just send plain text to the server (which then gets implemented to the DOM), you can also send files
let absolutePath = __dirname + '/views/index.html'; 
//in this case we are chosing to first send the html file 
console.log(absolutePath);

app.get('/', (req, res) => {
  res.sendFile(absolutePath); //very similar to Response.send() but can actually change the whole webpage
})


/** 4) Serve static assets  */

let staticPath = __dirname + '/public'; //a simple variable that will hold the path that leads to the CSS file for our website

app.use(express.static(staticPath)); // the path parameter was left out but the middleware function can not be left out. this added the css file onto our website


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
