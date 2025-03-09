// Constructor Function for Animal
function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}

// Adding a method to the prototype
Animal.prototype.makeSound = function() {
    console.log(`${this.type} says ${this.sound}`);
};

// Instantiate an object
const dog = new Animal("Dog", "Woof");
dog.makeSound(); // Output: Dog says Woof
