// Understanding the Math Object and Property Descriptors in JavaScript

// The Math object in JavaScript provides a collection of mathematical constants and functions.
// For example, Math.PI provides the value of pi, which is a mathematical constant.

console.log(Math.PI); // Outputs: 3.141592653589793

// Attempting to overwrite the value of Math.PI
Math.PI = 4;
console.log(Math.PI); // Outputs: 3.141592653589793 (unchanged)

// The reason the value of Math.PI doesn't change is due to its property descriptor settings.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/*
Output of descriptor:
{
  configurable: false,
  enumerable: false,
  value: 3.141592653589793,
  writable: false
};
*/

// Analysis of Property Descriptor:
// - writable: false — This means the value of the property cannot be changed.
// - configurable: false — This means the property cannot be deleted or changed to be an accessor property.
// - enumerable: false — This means the property does not show up in enumerations such as loops or Object.keys().

// Applying Property Descriptors to Custom Objects
const chai = {
  name: "Ginger Chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("Chai nahi bni"); // Logs if chai is not made
  },
};

console.log(chai); // Logs the chai object

// Modifying property descriptors of custom objects
Object.defineProperty(chai, "name", {
  writable: false, // Making the 'name' property unwritable
  enumerable: false, // Making the 'name' property unenumerable
});

// Checking the modified property descriptor
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Attempting to modify the 'name' property
chai.name = "Masala Chai";
console.log(chai.name); // Still outputs "Ginger Chai" because 'name' is now unwritable

// Enumerating over chai object properties
console.log("Enumerating properties:");
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`); // Will not list 'name' as it is now non-enumerable
  }
}

// Conclusion:
// Property descriptors provide control over how properties of objects are accessed and modified in JavaScript,
// allowing developers to enforce immutability (read-only), prevent enumeration, or even restrict deletion of properties.
// This control is particularly useful for maintaining integrity and preventing accidental modification of critical properties
// within objects, especially in larger applications where such mutations might lead to bugs or inconsistencies.
