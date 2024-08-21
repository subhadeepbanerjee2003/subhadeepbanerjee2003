//str.length property it is not a method/function it is a property of string object so we don't need to use () to call it

const str = "helloworld";

function getLength(str) {
  console.log("original string:", str);
  console.log("original string length:", str.length);
}
getLength("hello world");

// str.indexOf() method

function findIndexOf(str, target) {
  console.log("original string:", str);
  console.log("Index of target:", str.indexOf(target));
}
findIndexOf("hello world", "world");

function findIndexOf(str, target) {
  console.log("original string:", str);
  console.log("Index of target:", str.indexOf(target));
}
findIndexOf("hello world", "jhjhg"); // here if we want to find index of any word which is not present here then it will return -1

function findIndexOf(str, target) {
  console.log("original string:", str);
  console.log("Index of target:", str.indexOf(target));
}
findIndexOf("hello world world", "world"); // here world is present two times so it will return index of first "world" only

function findIndexOf(str, target) {
  console.log("original string:", str);
  console.log("Index of target:", str.lastIndexOf(target));
}
findIndexOf("hello world world world", "world"); // if we want the index of last "world" then we will use lastIndexOf() method

/*console.log(str.substr(2, 5));//llowo // start index can be negative but length can't be negative
console.log(str.substr(-2, 5));//ld
console.log(str.substr(2, -5));//empty string
console.log(str.substr(-2, -5));//empty string
//single value
console.log(str.substr(2));//lloworld
console.log(str.substr(-2));//ld
*/

// indexing are done from 0 to length-1
// for negative value of start or end when we are considering from the position from end for that positioning we are going as 1,2.... but for the index it is same 0,1 .... length-1

/*
console.log(str.slice(2, 5));// llo
console.log(str.slice(-2, 5));// empty string
console.log(str.slice(2, -5));//llo
console.log(str.slice(-2, -5));// empty string
/ single value
console.log(str.slice(2));// lloworld
console.log(str.slice(-2));// ld

 / [included,excluded)= included -> start and excluded -> end
 / detail of slice() method by 2nd example :The starting index is -2, which corresponds to the second-to-last character in the string ("l"), and the ending index is 5, which corresponds to the sixth character in the string ("w"). Since the starting index comes after the ending index, the result is an empty string.

*/

console.log(str.substring(2, 5));
console.log(str.substring(-2, 5));
console.log(str.substring(2, -5));
console.log(str.substring(-2, -5));
//single value
console.log(str.substring(2));
console.log(str.substring(-2));

// for substring() method if we give negative value then it will be treated as 0
// for substring() method if we give startindex>endindex then it will swap the values and then it will give the result

// we can get the substring by typically creating a function

const getSubstring = (str, startIndex, endIndex) => {
  let result = "";
  for (let i = startIndex; i < endIndex; i++) {
    result += str[i];
  }
  return result;
};

console.log(getSubstring("hello world", 2, 5));

//str.replace() method

function replaceString(str, oldStr, newStr) {
  console.log("original string:", str);
  console.log("new string:", str.replace(oldStr, newStr));
}
replaceString("hello world", "world", "earth");

//split the string

/*In JavaScript, the split function is used to split a string into an array of substrings based on a specified delimiter. Here's a basic example:

javascript
let sentence = "This is a sample sentence";
let words = sentence.split(" ");

console.log(words);


In this example, the split function is called on the sentence string with a space (" ") as the delimiter. As a result, the string is split into an array of words, and the output will be:


["This", "is", "a", "sample", "sentence"]


You can use different delimiters, such as commas, hyphens, or any other character, depending on how you want to split the string.

javascript
let csvData = "John,Doe,30,New York";
let personDetails = csvData.split(",");

console.log(personDetails);


This would output:


["John", "Doe", "30", "New York"]


Keep in mind that the split method does not modify the original string; it returns a new array with the substrings.*/

function splitString(str) {
  console.log("original string:", str);
  console.log("splitted string:", str.split(" "));
}
splitString("hello world");

//trim function the trailing and leading spaces but not inbetween spaces

const value = "     hello    world    ";

console.log(value.trim()); // ans = "hello    world"

//toUpperCase

const value1 = "splitString";
console.log(value1.toUpperCase()); // ans = SPLITSTRING

//toLowerCase

const value2 = "SPLITSTRING";
console.log(value2.toLowerCase()); // ans = splitstring

//parse the integer part of the string

console.log(parseInt("123")); // ans = 123
console.log(parseInt("123hello")); // ans = 123
console.log(parseInt("123.1144")); // ans = 123
console.log(parseInt("sd123hello")); // ans = NaN because it is not able to parse the integer part of the string becuase it is not starting with integer

// it basically start parsing from the beginning of the string and it will parse till it will get the non integer value

//parse the float part of the string

console.log(parseFloat("123")); // ans = 123
console.log(parseFloat("123hello")); // ans = 123
console.log(parseFloat("123.1144")); // ans = 123.1144
console.log(parseFloat("sd123hello")); // ans = NaN because it is not able to parse the float part of the string becuase it is not starting with float
