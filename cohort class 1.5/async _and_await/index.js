// async await syntax (again just syntactic sugar : still using promises/callbacks under the hood)

// normal syntax without async await

function subhaAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hi there!");
  });
}

function main() {
  subhaAsyncFunction().then(function (value) {
    console.log(value);
  });
}
main();

//async/await syntax

function subhaAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hi there!");
  });
}

async function main() {
  let value = await subhaAsyncFunction(); // no callback no .then func --> easier now to log the value
  console.log(value);
}
main();
