//lexicalscopic functions

function init() {
  let name = "Om"; // 'name' is lexically scoped within 'init'
  function displayName() {
    let secret = "mysecret";
    console.log(name); // Access to 'name' which is in the outer lexical environment
  }

  displayName();
  // console.log(secret);  // Unreachable, 'secret' is scoped only to 'displayName'
}

// console.log(name);  // Unreachable, 'name' is scoped to 'init'
init();

//child function can have access to parent's variables but parent doesn't have access to child's variables

// Closures
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables—a scope chain. Closures are created every time a function is created, at function creation time. They allow a function to access all the local variables, parameters, and other functions within its lexical scope, even after the outer function has returned.

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name); // Access to 'name' in the lexical scope of 'makeFunc'
  }

  return displayName; // The function `displayName` forms a closure here

  //here the interesting part is when we share the inner fucntion then not only that inner function returns but also the outer lexicalscopic function returns as well that how innner function retains the memory of outer function outside the whole functions
}

const myFunc = makeFunc();
myFunc(); // When `myFunc` is called, it still has access to 'name'
