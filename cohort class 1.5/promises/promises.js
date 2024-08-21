// till now this code is a fair example of async - callback func
// here findTill100 is a callback function which will be executed after the setTimeout function is done
// till then the rest codeblocks will be executed
/*
function findSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function findTill100() {
  return findSum(100);
}

setTimeout(findTill100, 1000);
console.log("hello world");  */

// this code is ugly
// promises are syntactical sugar that make this code slightly more readable

// promises are a way to handle async code in pretty way

// until now we  have only used other peoples async func
// now we will create our own async func

/*const fs = require("fs");

//my own async func
function subhReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

// this is a callback function
function onDone(data) {
  console.log(data);
}

subhReadFile(onDone);*/

// it is just a wrapper on top of another async function which is fine
// usually all async func we will arite will be on top of JS provided async func like setTimeout, readFile etc

// now we will use promises to make this code more readable

const fs = require("fs");

//my own async func
function subhReadFile() {
  //console.log("inside subhReadFile");
  return new Promise(function (resolve) {
    //console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      //console.log("before resolve");
      resolve(data);
    });
  });
}

// this is a callback function
function onDone(data) {
  console.log(data);
}

subhReadFile().then(onDone);

// it is just syntactical sugar still uses callback func under the hood
