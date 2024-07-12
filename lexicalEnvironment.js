// whenever we create a function that function will create an imaginary container called execution context over it which has 3 things:
// 1. the variables of that function
// 2. the functions insdie the paresnt function
// 3. Lexical environment --> lexical environment wo hota h jo y btata y ki y function kinn kinn cizo ko access krr skta aur kinn kinn cizo ka access use nhi h, esko scope bhi khte h

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
