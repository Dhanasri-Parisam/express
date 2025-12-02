
/* Steps to run this code:
creating a new folder for express
then run the command: npm init -y
to install express run the command: npm install express
create a file named 01_basic_express.js
write the following code in that file:
after writing the code run the command: node 01_basic_express.js
insted of running everytime we can use nodemon to run the server automatically whenever we make changes to the file. -> npx nodemon 01_basic_express.js
to install nodemon run the command: npm install -g nodemon
then run the command: nodemon 01_basic_express.js
the response will be shown in the browser or postman according to the request method (GET or POST).
we can inspect that browser response in the form of "html"
*/

// import express from "express";

// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<b>Hello World!<b>");
// });

// app.get("/route-handler", (req, res) => {
//   res.json({
//     name:"Dhanu",
//     age: 21,
//     married : false
//   });
// });

// app.listen(port, () => {
//   console.log(`example app listening on port ${port}`);
// });

/*  

How to get output:
1. Open terminal and navigate to the folder where this file is located.
2. cd express-basic-1
3. Run the command: node 01_basic_express.js
    -> This will start the server on port 3000.
    -> we can search -> "http://localhost:3000/" or "http://localhost:3000/route-handler"  according to the request method (POST in this case).
*/

/*

Change the request method from GET to POST
how to run in postman:
1. Open Postman application.
2. Select POST method from the dropdown.
3. Enter the URL: http://localhost:3002/  or http://localhost:3002/route-handler
4. Click on the "Send" button to make the request.
5. You will see the response from the server in the response section below.
*/


import express from "express";

const app = express();
const port = 3002;
// const port = process.env.PORT || 3000; // this is used to run the app in any port if the default port 3000 is busy
// we can set the port number in environment variable and access it using process.env.PORT
// how to run this: set PORT=4000 (in windows) or export PORT=4000 (in mac or linux) in terminal before running the app

app.post("/", (req, res) => {
  res.send("<b>Hello World!<b>");
});

app.post("/route-handler", (req, res) => {
  console.log(req.headers)
  res.json({
    name: "Dhanu",
    age: 21,
    married: false
  });
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});

/*
Explain syntax of express app:
1. Import the express module. 
   -> import express from "express";
2. Create an instance of an express application.
   -> const app = express();
3. Define the port number on which the server will listen.
   -> const port = 3002;
4. Define a route handler for POST requests to the root URL ("/").
   -> app.post("/", (req, res) => {
        res.send("<b>Hello World!<b>");
      });
5. Define a route handler for POST requests to the "/route-handler" URL.
   -> app.post("/route-handler", (req, res) => {
        res.json({
          name:"Dhanu",
          age: 21,
          married : false
        });
      }
6. Start the server and listen on the specified port.
   -> app.listen(port, () => {
        console.log(`example app listening on port ${port}`);
      });


conclusion in simplyfied way:
1. We import express module to use its functionalities.
2. We create an express application instance.
3. We define the port number for the server.
4. We set up route handlers for specific URLs and HTTP methods (POST in this case).
5. We start the server to listen for incoming requests on the defined port.
6. try to run same port number in different files it will give error like "Error: listen EADDRINUSE: address already in use :::3000"
*/


/*

in postmap I added new header key-value pair as "custom-header" : "dhanu-header-value"
  console.log(req.headers) will print all the headers including the custom header added in postman.
  we can access that custom header value using req.headers['custom-header']
  console.log("Custom Header Value:", req.headers['custom-header']);
  console.log("Custom Header Value:", req.headers['custom-header']);

  app.post("/route-handler", (req, res) => {
  console.log(req.headers)
  console.log("Custom Header Value:", req.headers['custom-header']);
  res.json({
    name: "Dhanu",
    age: 21,
    married: false
  });
});


OUTPUT in terminal will be like this:
PS C:\Users\paris\Desktop\getmaterial\express> cd express-basic-1   
PS C:\Users\paris\Desktop\getmaterial\express\express-basic-1> node 01_basic_express.js
example app listening on port 3002
{
  authorization: '123123123', => "This is newly added header in postman"
  'user-agent': 'PostmanRuntime/7.50.0',
  accept: '/',
  'postman-token': '5411ad02-03d2-4875-897b-7bc54a672614',
  host: 'localhost:3002',
  'accept-encoding': 'gzip, deflate, br',
  connection: 'keep-alive',
  'content-length': '0'
}

*/