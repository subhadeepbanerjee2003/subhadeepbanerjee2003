// here we will notice how log value changes with different syntax and it will build our intuition
// first case

function kiratsAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hi there!");
  });
  return p;
}

async function main() {
  const value = kiratsAsyncFunction();
  console.log(value);
}

main();

// here output is Promise { 'hi there!' }

// second case / ----------------------------------------------------/

function kiratsAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    setTimeout(function () {
      resolve("hi there!");
    }, 3000);
  });
  return p;
}

async function main() {
  const value = kiratsAsyncFunction(); // output is Promise { <pending> }
  console.log(value);
}

main();

// third case /--------------------------------------------/

function kiratsAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    setTimeout(function () {
      resolve("hi there!");
    }, 3000);
  });
  return p;
}

async function main() {
  const value = await kiratsAsyncFunction();
  console.log(value); // output is -> hi there!
  console.log("hello there!");
}

main();

console.log("hello");

// here 60th line -> 54th line -> 55th line because immediately after running it 60th line executed but thread waits for promises to be resolved till 3 seconds and then it prints 54th line and 55th line
// kiratsAsyncFunction() is an async function so it returns a promise and we can use await keyword to wait for the promise to be resolved
// in the picture properly two cases are given in this folder
