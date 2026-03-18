// Object-Oriented JavaScript Overview

// JavaScript initially did not have classical classes; instead, it is a prototype-based language. The concept of classes was introduced in ES6 as syntactic sugar over JavaScript's existing prototype-based inheritance, making it easier to write and manage objects.

/*
Object: In JavaScript, an object is a collection of properties and methods.

Object literal: A simple way of defining an object using curly braces.

Key Components of OOP in JavaScript:
- Constructor functions: Functions used to create objects.
- Prototypes: Allow methods and properties to be shared across instances.
- Classes: ES6 introduced a simpler syntax to create objects and handle inheritance.
- Instances: Individual objects created from a class or constructor function using the `new` keyword.
*/

// Four Pillars of OOP:
// 1. Abstraction: Hiding complex reality while exposing only the necessary parts.
// 2. Encapsulation: Wrapping code into logical structures easier to manage and use.
// 3. Inheritance: Mechanism for creating new classes from existing ones.
// 4. Polymorphism: Ability for objects to be treated as instances of their parent class or interface, often expressed through method overriding.

// Example of an Object Literal
const user = {
  username: "om",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got all the details of user HAHAHAH");
    console.log(`${this.username}`); // Using `this` to refer to the current object's properties
    console.log(this); // Logging the current context
    return "Hello";
  },
};

// Using a Constructor Function
function User(username, loginCount, isLoggedIN) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIN = isLoggedIN;
}

// Creating new instances of User
const userOne = new User("Om", 8, true);
const userTwo = new User("Hitest", 10, false);

console.log(userOne); // Logs the userOne object
console.log(userTwo); // Logs the userTwo object

// When using 'new' with a constructor function:
// 1. A new object is created.
// 2. 'this' keyword within the constructor function binds to the new object.
// 3. The function implicitly returns 'this', i.e., the new object.

// Important Notes:
// - Without the 'new' keyword, 'this' would refer to the global object (or undefined in strict mode), not a new instance.
// - Using 'new' ensures each instance has its own unique properties, as demonstrated with userOne and userTwo.

// Encapsulation and Inheritance Example with Classes
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

// Inheriting from Person
class Employee extends Person {
  constructor(name, jobTitle) {
    super(name); // Calls the parent class constructor
    this.jobTitle = jobTitle;
  }

  greet() {
    return `${super.greet()} and I am a ${this.jobTitle}`;
  }
}

// Creating an instance of Employee
const employee = new Employee("Jane", "Developer");
console.log(employee.greet()); // "Hello, my name is Jane and I am a Developer"

// Conclusion:
// JavaScript's OOP features enable developers to write more structured, maintainable, and reusable code.
// Understanding these concepts is crucial for designing complex applications efficiently.

//Array functions does not have access to this keywords
