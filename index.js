// get and post request check done in postman application
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // envirnment variable

app.use(bodyParser.json());

// body parser middleware will be used to parse the data from the body of the request

/*app.get("/", (req, res) => {
  res.send("Hello World!");  // GET request
});*/

/*app.post("/conversations", (req, res) => {
  res.send("Hi there!");
}); // POST request // http://localhost:3000/conversations in postman
*/

//middleware
app.get("/", (req, res) => {
  res.send("<b>hi there!!</b><br>Hello World!");
}); /// if we know the private ip of this server then we can access this server from any other device in the same network here private ip is 192.168.0.104 if we type in the phone 192.168.0.104:3000 then we can see what is written under  res.send

app.post("/conversations", (req, res) => {
  const message = req.body.message;
  //const message = req.query.message;
  //machine learning code here
  console.log(message);
  res.json({
    message: "the ans is 2+2=4",
  });
}); // POST request // http://localhost:3000/conversations in postman

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// differebnce between get and post request is that get request is used to get the data from the server and post request is used to send the data to the server
// Query parameters are key-value pairs that can be used in both GET and POST requests to provide additional information to a web server
