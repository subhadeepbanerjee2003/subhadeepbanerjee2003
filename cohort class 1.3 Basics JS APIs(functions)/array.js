// this is the 2nd part of the 3rd class of the cohort

//push() method

function pushExample(arr, element) {
  // here arr is the array and element is the element which we want to push in the array
  console.log("original array:", arr);
  arr.push(element);
  console.log("array after pushing:", arr);
}

pushExample([1, 2, 3, 4, 5], 6);

//pop() method

function popExample(arr) {
  // here arr is the array from which we want to pop the last element
  console.log("original array:", arr);
  arr.pop(); // here we are not passing any element because we want to pop the last element of the array
  console.log("array after popping:", arr);
}

popExample([1, 2, 3, 4, 5]);

//shift() method
// this method is used to remove the first element of the array just opposite of pop() method

function shiftExample(arr) {
  // here arr is the array from which we want to remove the first element
  console.log("original array:", arr);
  arr.shift(); // here we are not passing any element because we want to remove the first element of the array
  console.log("array after removing the first element:", arr);
}

shiftExample([1, 2, 3, 4, 5]);

//unshift() method - push the element at the beginning of the array

function unshiftExample(arr, element) {
  // here arr is the array and element is the element which we want to push in the array
  console.log("original array:", arr);
  arr.unshift(element);
  console.log("array after pushing:", arr);
}

unshiftExample([1, 2, 3, 4, 5], 6);

//concat() method - this method is used to concatenate two or more arrays

function concatExample(arr1, arr2) {
  // here arr1 and arr2 are the arrays which we want to concatenate
  console.log("original array1:", arr1);
  console.log("original array2:", arr2);
  let arr3 = arr1.concat(arr2);
  console.log("concatenated array:", arr3);
}

concatExample([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

//forEach() method - this method is used to iterate over the array

function forEachExample(arr) {
  // here arr is the array which we want to iterate do something when we iterate over each element of the array
  console.log("original array:", arr);
  arr.forEach((element) => {
    console.log(element);
  });
}

forEachExample([1, 2, 3, 4, 5]);

//another example of forEach() method

const initialArray = [1, 2, 3, 4, 5];

function logThing(str, ...args) {
  console.log(str, ...args);
}

initialArray.forEach(logThing);

/* let's break down how the `forEach` method works in this context:

1. `initialArray.forEach(logThing);`: Here, you are calling the `forEach` method on the `initialArray` array. The `forEach` method is an array method in JavaScript that allows you to iterate over each element in the array and perform a specified action for each element.

2. The `forEach` method takes a callback function as an argument. In this case, the callback function is `logThing`. The `forEach` method automatically passes three arguments to the callback function for each iteration:
   - The current element being processed in the array.
   - The index of the current element.
   - The array on which `forEach` was called.

3. In your code, the `logThing` function is defined to accept a parameter named `str`. When `forEach` iterates over each element in `initialArray`, it automatically passes the current element to the `logThing` function as the `str` parameter.

So, during each iteration, the `logThing` function is called with the current element of the array as its argument, and that element is then logged to the console using `console.log(str)`.

In summary, the `forEach` method takes care of iterating over the array and passing each element to the provided callback function (`logThing`), allowing you to perform actions on each element within the array. The name of the parameter (`str` in this case) is arbitrary; you could use any valid variable name you prefer.*/

//map() method - this method is used to iterate over the array and return a new array

function mapExample(arr) {
  // here arr is the array which we want to iterate do something when we iterate over each element of the array
  console.log("original array:", arr);
  let arr2 = arr.map((element) => {
    return element * 2;
  });
  console.log("new array:", arr2);
}

mapExample([1, 2, 3, 4, 5]);
