function kiratsAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    setTimeout(function () {
      resolve("hi there!");
    }, 3000);
  });
  return p;
}

const value = await kiratsAsyncFunction();
console.log(value); // output is -> hi there!
console.log("hello there!");

console.log("hello");

/// SyntaxError: await is only valid in async functions and the top level bodies of modules

// so we need to wrap our code in async function main()
