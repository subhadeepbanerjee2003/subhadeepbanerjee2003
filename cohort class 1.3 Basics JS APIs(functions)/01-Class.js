// classes are a way to create objects with the same properties and methods or we can say creates the blueprints for objects
// classes are created using the class keyword

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  static myType() {
    console.log("Animal");
  }
  // this method is related  to the class and static type properties are not available on the object

  describe() {
    // this is the function which is related to the object and not the class
    console.log(
      `${this.name} has ${this.legCount} legs and speaks like ${this.speaks}`
    );
  }
}
/*let dog = {
  name: "dog",
  legCount: 4,
  describe: function () {
    return `${this.name} has ${this.legCount} legs`;
  },
};*/

// dont do the above, use classes instead where we can create any animal with these properties and methods

let dog = new Animal("dog", 4, "bhow bhow"); //The new keyword is used to instantiate objects from a class. It creates a new instance of the Animal class with the specified property values
let cat = new Animal("cat", 4, "meow meow"); // create object

cat.describe(); // call function on object
dog.describe();

// difference btw static methods and other methods inside the class ::

// 1. lets say we are creating an class of building so there will be many properties for different building and each property will be different for each building so different objewcts will be created and the function we can normally define is for objects but there can be properties of the class too like buildings has different colour ,location,heightt etc but the blueprint or the class for each building will be same so we use static method for that
// and static method can be called without instanciating the object

console.log(Animal.myType());
