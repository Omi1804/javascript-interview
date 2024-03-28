// Closures and Nested Scopes in JavaScript

// Demonstrating Nested Scopes
function one() {
  // `username` is a variable scoped within the function `one`
  const username = "Om Nigam";

  function two() {
    // Nested function `two` creates a closure
    // `website` is scoped within the nested function `two`
    const website = "Youtube";

    // Here, `two` can access `username` because `username` is in the enclosing scope of `one`
    console.log(username);
  }

  // Attempt to access `website` outside its scope results in a ReferenceError
  // `website` is not accessible here because it's defined in the nested scope of `two`
  // Uncommenting the next line would raise an error
  // console.log(website);

  // Calling `two` inside `one` works because `two` is defined within `one`
  two();
}

// Calling `one` to execute the demonstration
one();

// This example demonstrates that a nested function can access variables of its enclosing function,
// but not the other way around. This behavior is a fundamental aspect of closures in JavaScript.

// +++++++++++++++++++++++++++ Interesting Stuff: Hoisting +++++++++++++++++++++++++++

// Function Declaration and Hoisting
// This function call works without any error due to function hoisting
addone(5); // This call is valid even before the function is defined thanks to hoisting

function addone(num) {
  // A function declaration that is hoisted to the top of its scope, allowing it to be called before it's defined
  return num + 1;
}

// Function Expression and Hoisting
// Attempting to call a function expression before it is defined will result in an error
// Uncommenting the following lines will demonstrate this behavior

// addtwo(5); // This would raise a TypeError: addtwo is not a function
const addtwo = function (num) {
  // Function expressions are not hoisted like function declarations
  // This means the function cannot be called before the expression is assigned
  return num + 2;
};

// The difference in behavior between function declarations and function expressions is due to hoisting.
// Hoisting elevates function declarations and var declarations to the top of their scope before code execution begins.
// However, const and let declarations (including function expressions assigned to const/let variables) respect block scope and are not hoisted in the same way.

// Conclusion:
// Understanding closures, nested scopes, and hoisting is essential for effective JavaScript programming.
// Closures allow for encapsulating and preserving state across function calls,
// while understanding hoisting helps predict the behavior of function calls and variable declarations.
