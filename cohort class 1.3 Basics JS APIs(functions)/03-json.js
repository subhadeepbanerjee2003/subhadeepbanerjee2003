//json stands for javascript object notation

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};
console.log(person["age"]);
console.log(person["name"]);
console.log(person["city"]);
// the above code is an example of an object

// now understnad about json notation

// json is a way of representing data in a text format

// json is a subset of javascript object literal notation

//example

const user = `{ "name": "Alice", "age": 25, "city": "Wonderland" }`;

console.log(user.name); // shows output as undefined becuase user is no longer a object
// it is now a string

// to convert the string into an object we use JSON.parse()

//JSON.parse() is a method that converts a string into an object
//JSON.stringify() is a method that converts an object into a string

const user1 = JSON.parse(user);

console.log(user1.name);

const user2 = JSON.stringify(person); //  now converting the person object into string

console.log(user2); // shows output as {"name":"Alice","age":25,"city":"Wonderland"}
