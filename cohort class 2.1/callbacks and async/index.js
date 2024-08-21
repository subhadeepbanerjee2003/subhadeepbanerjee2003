const fs = require("fs");

function putCopyRightFile(cb) {
  fs.readFile("a.txt", "utf8", function (err, data) {
    data = data + "// copy right";
    fs.writeFile("a.txt", data, function (err) {
      cb();
    });
  });
}

putCopyRightFile(function () {
  console.log("copyright has been put");
});

// in our coding journey we dont have to write async func of our own , we will use the js given async func to build our own async func and under the hood of those setTimeout or fs.Readfile etc..

// like here we have fs.readFile which is async func and we will use it to build our own async func
