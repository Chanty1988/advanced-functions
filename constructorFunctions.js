// Constructor Function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Instantiate an object
const person1 = new Person("Coco", 30);
person1.greet(); // Output: Hello, my name is Coco and I am 30 years old.
