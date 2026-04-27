// The `for...of` Loop in JavaScript

// The `for...of` loop is a modern loop introduced in ES6, specifically for iterating over iterable objects such as Arrays, Strings, Maps, NodeLists, and more.
// It allows for a concise and readable syntax to traverse these collections.

// Example with Array
const arr = [1, 2, 3, 4, 5];
// Iterating over each element of the array
for (const i of arr) {
  console.log(i); // Logs each number in the array
}

// Example with String
const greetings = "Hello world!";
// Iterating over each character of the string
for (const greet of greetings) {
  console.log(greet); // Logs each character of the string
}

// Maps in JavaScript
// A Map holds key-value pairs and remembers the original insertion order of the keys. Each key can only appear once in a Map.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");
map.set("IN", "Bharat"); // This will replace the previous value for "IN" because keys are unique.

// Iterating over Map entries
for (const i of map) {
  console.log(i); // Logs each entry as [key, value]
}

// To destructure key-value pairs directly in the loop
for (const [key, value] of map) {
  console.log(key, value); // Logs the key and value separately
}

// `for...of` Loop and Objects
// Direct iteration over objects with `for...of` is not possible as objects are not iterable by default.
// However, one might iterate over an object's properties by using Object.keys, Object.values, or Object.entries with `for...of`.

const myObjects = {
  game1: "NFS",
  game2: "Spiderman",
};

// Example using Object.entries to make it iterable
for (const [key, value] of Object.entries(myObjects)) {
  console.log(key, " > ", value); // Logs each property key and value
}

// The `for...in` Loop in JavaScript
// Unlike `for...of`, the `for...in` loop iterates over the enumerable property names of an object.

// For Objects
for (const key in myObjects) {
  console.log(key, " > ", myObjects[key]); // Logs the key and the value of each property in the object
}

// `for...in` with Arrays
for (const key in arr) {
  console.log("at position " + key + ": " + arr[key]); // Logs the index and the value at that index
}

// `for...in` and Maps
// `for...in` loop does not work with Map objects as expected because it is designed to work with object properties, not Map entries.

// Conclusion:
// The `for...of` loop provides a modern, clean, and readable way to iterate over iterable objects.
// It's particularly useful for collections where the order of elements matters.
// The `for...in` loop is useful for iterating over object properties but should be used carefully with arrays to avoid unexpected behavior.
