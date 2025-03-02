// Define a constructor function for creating Person objects
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

// Instantiate an object using the constructor function
const person1 = new Person('John Doe', 30, 'Software Developer');

// Log the properties of the instantiated object
console.log('Name:', person1.name);
console.log('Age:', person1.age);
console.log('Occupation:', person1.occupation);