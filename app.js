// Singleton Pattern in JavaScript
// A singleton is a class that allows only a single instance of itself to be created and gives access to that created instance.
// It can be implemented in JavaScript using a simple object literal since objects in JS are unique.
const tinderUser = new Object(); // Using the 'new Object()' syntax to create an object. This approach can create a singleton pattern where 'tinderUser' is the only instance of this particular object.

// Adding properties to the singleton object
tinderUser.id = "123abc"; // Unique identifier for the user
tinderUser.name = "Omm"; // Name of the user
tinderUser.isLoggedIn = true; // Login status of the user

// Logging the singleton object to the console
console.log(tinderUser);

// Declaring Nested Objects
// Objects can contain other objects, allowing for complex data structures like nested objects.
const regularUser = {
  email: "some@gmail.com", // User email
  fullname: {
    // 'fullname' is a nested object within 'regularUser'
    firstName: "Omm",
    lastName: "Nigam", // Note: property names are case-sensitive; corrected "LastName" to "lastName" for consistency.
  },
};
// Accessing nested object properties
console.log(regularUser.fullname.firstName); // Outputs: Omm

// Merging Objects Together
// JavaScript provides multiple ways to merge objects, including 'Object.assign()' and the spread operator '...'.
const obj1 = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" };
const obj2 = { 6: "f", 7: "g", 8: "h", 9: "i", 10: "j" };

// Using Object.assign() to merge objects
// This method copies the properties from one or more source objects to a target object.
const obj3 = Object.assign({}, obj1, obj2); // Merges 'obj1' and 'obj2' into a new object '{}'
console.log(obj3); // Outputs the merged object with properties from both obj1 and obj2

// Using the spread operator to merge objects
// The spread operator (...) allows for the expansion of an object's properties into a new object.
const obj4 = { ...obj1, ...obj2 }; // Similar to 'Object.assign', but uses the spread syntax.
console.log(obj4); // Outputs the merged object

// Working with Arrays of Objects
const users = [{ name: "John", age: 10 }]; // An array containing one object with 'name' and 'age' properties

// Working with Object Keys and Values
// JavaScript provides methods to retrieve an object's keys or values as arrays.
console.log(Object.keys(tinderUser)); // Outputs an array of 'tinderUser' object's keys
console.log(Object.values(tinderUser)); // Outputs an array of 'tinderUser' object's values

// These methods are useful for iterating over an object's properties or for performing operations on the set of keys or values.
