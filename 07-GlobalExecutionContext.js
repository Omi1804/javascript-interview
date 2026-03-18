// JavaScript Execution Context

// The JavaScript execution context is a fundamental concept to understand how JavaScript code is executed.
// There are two main types of execution contexts: Global Execution Context and Function Execution Context.

// 1. Global Execution Context:
// - This is the default or base execution context.
// - The code that is not inside any function is executed within the global execution context.
// - It creates a global object (`window` in browsers, `global` in Node.js) and a special object called `this`.
// - Variables declared outside of functions are added to the global context and can be accessed globally.

// 2. Function Execution Context:
// - Each time a function is invoked, a new execution context is created for that function.
// - This context is specific to the function and its local variables.

// JavaScript code execution happens in two phases:
// a. Memory Creation Phase (also known as the Hoisting Phase)
// b. Execution Phase

// Example to Illustrate Execution Contexts:
let val1 = 10;
let val2 = 5;

function addNum(val1, val2) {
  // This function adds two numbers and returns the result.
  let total = val1 + val2;
  return total;
}

let result1 = addNum(val1, val2); // Calling addNum with global variables `val1` and `val2`
let result2 = addNum(10, 2); // Calling addNum with literal values

// Execution Context Workflow:

// 1. Global Execution Context Creation:
//    - At the start, the JavaScript engine creates the Global Execution Context.

// 2. Memory Creation Phase for Global Context:
//    - During this phase, the engine allocates memory for variables and functions.
//    - Variables are initially set to `undefined` and functions are hoisted (fully allocated in memory).
/*
Memory allocation looks like this:
val1 = undefined;
val2 = undefined;
addNum = <function reference> // The function is fully defined here
result1 = undefined;
result2 = undefined;
*/

// 3. Execution Phase for Global Context:
//    - The engine executes the code line by line.
//    - Variables `val1` and `val2` are assigned their respective values.
//    - When `addNum` function is called, a new Function Execution Context is created for each call.

// 4. Function Execution Context:
//    - For each call to `addNum`, a new execution context is created with its own Memory Creation and Execution Phases.
//    - Function arguments are assigned, and local variables are allocated memory and then executed.
/*
For each call to addNum:
Memory Creation Phase:
total = undefined;

Execution Phase:
total = val1 + val2; // The values passed to `addNum` are added.
*/

// Conclusion:
// Understanding the execution context in JavaScript is crucial for grasping how functions, variables, and scopes work.
// It explains the lifecycle of a script from memory allocation to execution, highlighting the importance of the order of execution and how JavaScript handles variable and function declarations.
