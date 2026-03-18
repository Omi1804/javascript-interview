// The `forEach` Method in JavaScript
// `forEach` is a method that executes a provided function once for each array element.
//forEach method original array prr ni blki uski copy p execution krta hai tbhi original array affect nhi hota

const coding = ["js", "ruby", "cpp", "java", "python"];

// Basic usage of `forEach`
coding.forEach((item) => {
  console.log(item); // This will log each item in the `coding` array to the console.
});

// `forEach` with a reference to an external function
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe); // Passing the function reference `printMe` to be executed on each array item.

// `forEach` with additional parameters
// Besides the current item, `forEach` provides access to the item's index and the array itself.
coding.forEach((item, index) => {
  console.log(item, index); // Logs the item along with its index.
});

//For object we use forIn loop

const obj = {
  name: "Om Nigam",
  age: 20,
  subject: "computerscienc",
};

for (const key in obj) {
  console.log(key, ":", obj[key]);
}

// `forEach` with array of objects
const myCoding = [
  { languageName: "javascript", languageFileName: "js" },
  { languageName: "C with Classes", languageFileName: "C++" },
  { languageName: "typescript", languageFileName: "ts" },
  { languageName: "Hypertext markup language", languageFileName: "html" },
];

myCoding.forEach((item) => {
  console.log(item.languageFileName, item.languageName); // Logs the properties of each object in the array.
});

// Note: `forEach` does not return anything; it always returns `undefined`. It's used for performing actions on each array element.

// Beyond `forEach`: Utilizing `filter`, `map`, and `reduce`

// `filter` Method
// `filter` creates a new array with all elements that pass the test implemented by the provided function.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4); // Filters numbers greater than 4.
console.log(newNums); // Logs [5, 6, 7, 8, 9, 10]

// `map` Method
// `map` creates a new array populated with the results of calling a provided function on every element in the calling array.
const newNum = myNums.map((num) => num + 10); // Adds 10 to each number.
console.log(newNum); // Logs the new array after adding 10 to each element.

// Chaining `map` methods
const newN = myNums.map((num) => num * 10).map((num) => num + 1); // First multiplies each number by 10, then adds 1.
console.log(newN); // Logs the result of the chaining operation.

// `reduce` Method
// `reduce` executes a reducer function on each element of the array, resulting in a single output value.
const myTotal = myNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // The second parameter `0` is the initial value for the accumulator.

// Here, `reduce` is used to sum all elements of the array, starting with an accumulator value of 0.
console.log("Final value", myTotal); // Logs the sum of all numbers in the `myNums` array.

// Conclusion:
// JavaScript array methods such as `forEach`, `filter`, `map`, and `reduce` offer powerful tools for manipulating arrays.
// Each method serves a specific purpose: `forEach` for executing side effects, `filter` for creating filtered arrays,
// `map` for transforming arrays, and `reduce` for accumulating a single value from an array's elements.
