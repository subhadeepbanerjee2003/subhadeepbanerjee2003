let d = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("foo");
  }, 1000);
});

function callback() {
  console.log(d);
}

console.log(d);

d.then(callback);

// we have used setTimeout here to see the diff btw pending and resolve and how promise return data

// here as setTimeout for 1 sec so 11th line will be executed and pending promises wll be printed and then the resolve value will be printed
