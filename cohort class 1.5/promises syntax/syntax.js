/*let d = new Promise(function (resolve) {});

// here Promise is a class and new Promise is an object and here as a arguement we have to put a function and the function should also have an arguement

console.log(d);

it will give pending as an ouput because resolve has not been called yet

*/

// now onDone() calling
let d = new Promise(function (resolve) {
  resolve();
});

// console.log(d); // till now pending is discussed
// promise has three stage => pending,resolve,rejected
// now resolve ::

function callback() {
  console.log(d); // here undefined will be returned because no data is there
}

d.then(callback);

// here d is a promise which is called inside a callback
// we can call it ouside call back also let do it in next syntax2.js file with data returned
