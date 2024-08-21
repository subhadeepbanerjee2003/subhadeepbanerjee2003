// approach 1 :: wrapping another async function
// this approach uses a callback , you have created a func where other people can send a callback , this is good but could lead to call back hell

/*
function myOwnSetTimeout(callback, duration) {
  setTimeout(callback, duration);
}

myOwnSetTimeout(function () {
  console.log("hi there");
}, 2000);

*/

// intro to callback hell

// if we are told to create a function that logs something after 1 seconds and then wait for 2 sec to log another thing

// approach 1 (using callback)

function myOwnSetTimeout(callback, duration) {
  setTimeout(callback, duration);
}

myOwnSetTimeout(function () {
  console.log("hi there"); // first log after 1 sec
  myOwnSetTimeout(function () {
    console.log("hi there again"); // second log after 2 sec
  }, 2000);
}, 1000);

// but this is not a good approach as it leads to callback hell
// here one after another callback is being used just like nesting one async func into another
/* 

instead  of above approach if we do below kind of things then it will be much better

waitfor(1000);
console.log("hi there");
waitfor(2000);
console.log("hi there again");

but here function call is not a async type call here the js thread would be busy ,, so here comes promises into the picture

*/

//  promises syntax ::

/*
function myOwnSetTimeoutForPromises(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

myOwnSetTimeoutForPromises(1000).then(function () {
  console.log("log the first thing");
}); */

// using promises

function myOwnSetTimeoutForPromises(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

myOwnSetTimeoutForPromises(1000)
  .then(function () {
    console.log("hi there");
    return myOwnSetTimeoutForPromises(2000);
  })
  .then(function () {
    console.log("hi there again");
  });
