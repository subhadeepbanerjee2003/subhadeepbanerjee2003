const fs = require("fs");
// real use of callbacks is in async functions where we are calling back an anoaymous function to show data or show error(in this case)after the async function is done
// filesystem is a module that allows us to read and write files

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data); // no 1
}); // this is an asynchronous function and utf-8 is the encoding

console.log("hello world"); // no 2

let a = 0;
// this takes longer time than reading a file
for (let i = 0; i < 1000000000; i++) {
  // no 3
  a++;
}

console.log("hello world 2 "); // no 4

// interesting fact : although the no 3 takes longer time than no 1 ,still it will be executed first because no 1 is an async func which will be in callback queue and will be executed after the call stack is empty
// no 2 will be executed first then no 3 then no 4 then no 1
// untill no 2,3,4 will be executed and call stack get empty the no 1 will remain in callback queue

// note : if two timeout like async function is assigned then they will go to call stack in the order as they finish their execution
// example in a photo of this folder
