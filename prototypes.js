// Define a constructor function for creating Animal objects
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

// Add a method to the Animal prototype
Animal.prototype.describe = function() {
  return `${this.name} is a ${this.species}.`;
};

// Instantiate an object using the constructor function
const animal1 = new Animal('Leo', 'Lion');

// Use the prototype method
console.log(animal1.describe());