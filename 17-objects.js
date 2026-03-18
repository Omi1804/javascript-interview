// Object Literals in JavaScript
// An object literal is a way to define and create objects in JavaScript directly by listing their properties within curly braces {}.

// Creating a symbol - Symbols are unique and immutable primitive data types and can be used as identifiers for object properties.
const mySymbol = Symbol("key1"); // Creating a symbol with a description "key1". Symbols are unique, ensuring that property keys are unique.

// Defining an object with various properties and a symbol as a key
const JsUsers = {
  name: "Om", // String property
  [mySymbol]: "Hello symbol", // Using a symbol as a property key. Symbols ensure the uniqueness of the property keys.
  age: 20, // Number property
  email: "Om@gmail.com", // String property representing an email
  isLoggedIn: false, // Boolean property representing login status

  // Adding methods to an object below
};

// Accessing object properties
// There are two ways to access the properties of an object: dot notation and bracket notation.

// Dot notation is used most frequently for its simplicity and readability.
console.log(JsUsers.email); // Accessing the email property using dot notation

// Bracket notation is more versatile than dot notation because it can use variables and strings that wouldn't be valid identifiers.
console.log(JsUsers["email"]); // Accessing the email property using bracket notation

// Accessing a property using a Symbol key
// Symbols are not accessible through dot notation; they require bracket notation.
console.log(JsUsers[mySymbol]); // Accessing the value of a property identified by a Symbol

// Adding functions (methods) to the object
// Methods are functions that are stored as object properties.
JsUsers.greeting = function () {
  console.log("Hello from JS user"); // This method, when called, will print a greeting to the console.
};

// Calling the greeting method
JsUsers.greeting();

// Using 'this' keyword in methods
// The 'this' keyword refers to the object the function is a property of.
// This allows the function to access and manipulate the object's properties based on the current context.
JsUsers.greeting2 = function () {
  // This method demonstrates the use of 'this' to access the object's name property.
  console.log(`Hello from ${this.name}`);
  // 'this.name' dynamically refers to the 'name' property of 'JsUsers' when the method is called.
};

// Calling the greeting2 method to see 'this' keyword in action
JsUsers.greeting2();
