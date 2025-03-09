// Factory Function for Person
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

// Create an object
const person2 = createPerson("Cater", 25);
person2.greet(); // Output: Hello, my name is Cater and I am 25 years old.
