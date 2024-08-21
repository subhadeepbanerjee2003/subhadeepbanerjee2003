/* one function can call another function inside it , lets look with example
  finds the square of the input

function square(x) {
  return x * x;
}
   finds the sum of the squares of the input

function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

console.log(sumOfSquares(2, 3));   */

//callback functions also follow the dry process , lets look with example

//without callback function
/*

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = cube(b);

  return val1 + val2;
}
 here we are repeating the same process again and again , so we can use callback function to avoid this

function sumOfCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);

  return val1 + val2;
}

console.log(sumOfSquares(2, 3));
console.log(sumOfCubes(2, 3));     */

///with callback function

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function sumOfSquares(a, b, callback_fn) {
  const val1 = callback_fn(a);
  const val2 = callback_fn(b);

  console.log(callback_fn); // we can also get the function name here which func we are calling

  return val1 + val2;
}

console.log(sumOfSquares(2, 3, square));
console.log(sumOfSquares(2, 3, cube));

// we can also do

console.log(
  sumOfSquares(2, 3, function (n) {
    return n + n;
  })
); // here we defined the function during calling at same time
