// can js context switch or delegate tasks?

// yes

// broad overview with example

function findSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
function findSumTill() {
  console.log(findSum(100));
}

//setTimeout() is an async function that delegates a task to the browser and this function is prebuilt in js

setTimeout(findSumTill, 1000); // calling an async function
console.log("hello");

// few other async functions that js provides us out of the box and they are global func

// fs.readFile() - read a file from the file system
// Fetch() - make a network request
