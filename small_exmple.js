// creating a http server
// express
// like the fs modules comes along with node, express does not come bundled with node so first we need to install it
// npm install express

const express = require("express");

const app = express();

function sumCalc(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

app.get("/", function (req, res) {
  // callback function

  const n = req.query.n; // to get the query parameter in codebase
  const result = sumCalc(n);
  res.send("<b>Hi your ans is</b> " + result.toString());
});

app.listen(3000, function () {
  // callback function
  console.log("Server is running on port 3000");
});
