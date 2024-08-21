//object method Explanation

function objectMethods(obj) {
  console.log("the original object:", obj);

  //Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
  console.log("Object.keys():", Object.keys(obj));

  //Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
  console.log("Object.values():", Object.values(obj));

  //Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
  console.log("Object.entries():", Object.entries(obj));

  //hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
  console.log("hasOwnProperty():", obj.hasOwnProperty("key1"));
  console.log("hasOwnProperty():", obj.hasOwnProperty("key4"));

  //Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
  console.log("Object.assign():", Object.assign({}, obj));
}

//Example usage of object methods
const sampleObjects = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObjects);
