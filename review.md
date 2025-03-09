Day 1: JavaScript Basics
These are the core building blocks of JavaScript programming.

🔹 Variables
Used to store data.
Declared using var, let, or const.
javascript
Copy
Edit
let name = "Alice";  // Can be reassigned
const PI = 3.14;     // Cannot be reassigned

🔹 Data Types
JavaScript has several data types:

Primitive Types: String, Number, Boolean, Undefined, Null, Symbol, BigInt.
Reference Types: Objects, Arrays, Functions.
javascript
Copy
Edit
let age = 30;             // Number
let isLoggedIn = true;    // Boolean
let user = { name: "Bob" }; // Object

🔹 Operators
Used to perform actions like arithmetic, comparison, etc.

javascript
Copy
Edit
let sum = 5 + 3;       // Addition
let isEqual = 10 === 10; // Strict equality

🔹 Objects
Collections of key-value pairs used to store complex data.

javascript
Copy
Edit
let person = {
    name: "Charlie",
    age: 28
};
console.log(person.name); // Output: Charlie


Day 2: Advanced JavaScript Concepts
These concepts introduce powerful ways to manage data and control flow.

🔹 this Keyword
Refers to the object that is currently executing the code.
javascript
Copy
Edit
const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};
person.greet(); // Output: Hello, Alice

🔹 JSON (JavaScript Object Notation)
A lightweight data format used for data exchange.
Commonly used in APIs.
javascript
Copy
Edit
const jsonString = '{"name": "Alice", "age": 30}';
const data = JSON.parse(jsonString); // Convert JSON string to object
console.log(data.name); // Output: Alice


Day 3: DOM Manipulation
The DOM (Document Object Model) allows you to dynamically update web pages.

🔹 getElementById
Selects an element by its ID.

javascript
Copy
Edit
document.getElementById("title").textContent = "Updated Title";

🔹 querySelector
Selects an element using a CSS selector.

javascript
Copy
Edit
document.querySelector(".btn").style.color = "blue";

🔹 preventDefault()
Prevents the default behavior of an event (e.g., stopping a form submission or link navigation).

javascript
Copy
Edit
document.querySelector("a").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link click prevented!");
});


Day 4: Promises and Async/Await
These are used for handling asynchronous operations.

🔹 Promises
A Promise represents a value that may be available in the future (e.g., after a network request).

javascript
Copy
Edit
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

🔹 async/await
A cleaner way to handle Promises.

javascript
Copy
Edit
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
fetchData();

🔹 setTimeout
Delays the execution of code.

javascript
Copy
Edit
setTimeout(() => {
    console.log("This runs after 2 seconds!");
}, 2000);
Day 5: Advanced Functions
This includes:

🔹 Constructor Functions
Used to create multiple objects with the same structure.
javascript
Copy
Edit
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Alice", 30);
console.log(person1.name); // Output: Alice

🔹 Factory Functions
Another way to create objects, typically returning an object directly.
javascript
Copy
Edit
function createPerson(name, age) {
    return { name, age };
}
const person2 = createPerson("Bob", 25);
console.log(person2.name); // Output: Bob

🔹 Prototypes
Allow you to add methods to existing constructor functions.
javascript
Copy
Edit
function Animal(type) {
    this.type = type;
}
Animal.prototype.speak = function() {
    console.log(`${this.type} makes a sound`);
};
const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a sound

🔹 Inheritance
Enables one object to inherit properties and methods from another.
javascript
Copy
Edit
function Dog(name) {
    this.name = name;
}
Dog.prototype.bark = function() {
    console.log(`${this.name} barks!`);
};

const puppy = new Dog("Buddy");
puppy.bark(); // Output: Buddy barks!