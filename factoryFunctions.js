// Define a factory function for creating Person objects
function createPerson(name, age, occupation) {
  return {
    name: name,
    age: age,
    occupation: occupation
  };
}

// Create an object using the factory function
const person1 = createPerson('John Doe', 30, 'Software Developer');

// Log the properties of the created object
console.log('Name:', person1.name);
console.log('Age:', person1.age);
console.log('Occupation:', person1.occupation);