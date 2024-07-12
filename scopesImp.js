// Understanding Variable Scopes in JavaScript
// In JavaScript, variables can be declared using `var`, `let`, or `const`. The scope of a variable determines where it is accessible in the code.

//first difference ---->  var is ES5 compatible JS and let and const are ES6 compatible and the browsers use the mixutre of es5 and es6

// Example demonstrating variable scopes
if (true) {
  // Using a simple if condition that always evaluates to true to demonstrate scopes.
  let a = 10; // `let` declares a block-scoped local variable, meaning `a` is only accessible within this if block.
  const b = 20; // `const` also declares a block-scoped variable, but its value is a constant and cannot be reassigned.
  var c = 30; // `var` declares a variable that is scoped to the function or globally if declared outside a function.
}

// ----------------IMP----------------

//Second Difference ----> var = apne parent funtions m kahi bhi cll skta hai
function varkiSaccaai() {
  for (var i = 0; i < 10; i++) {
    console.log(i); // to yaha to var print hoga hi
  }

  console.log("var ki sacchai", i); //but yaha bhi var ki value print hogi = 10
}

varkiSaccaai();
// Var apne parent funtion m kahi bhi use hoo skta h

//aur let braces scoped hota h mtlb ekk "{" se doosre "}" tkk

//Third Difference ------> var add itself to the window's object

//JS me kai features nhi hai jo ham use krr skte hai aur wo cize hme js language se nhi blki browser se milti hai, asise saare features jo js kaa part nhi h but fr bhi ham use krr skte hai unhe ham doodh skte h ekk particular object me jiska naam hai window
//features like alert , console, settimeout , setinterval, fetch, localstorage, screen...etc y saari cize js language kaa part nhi bulki browser se milti hai. Enhe dekhne k liye browser k console p window object enter kro.

//to enn browser k features k sath sath if we write "var a = 5" then window k andr ekk aur property bnn jaati hai a naam ki jiski value 5 hoti h.... this is the means by saying var add itself to the window's object. aur y security purpose se accha nhi h

// Attempting to access variables outside their scope
// console.log(a); // Uncommenting this line will result in a ReferenceError because `a` is block-scoped to the if block.
// console.log(b); // Similarly, attempting to access `b` outside its block will result in a ReferenceError.
console.log(c); // `c` is accessible here because `var` does not have block scope, but function or global scope.

// Discussion on why `var` is less preferred
// The behavior of `var` can lead to unexpected results and bugs in complex applications. Here are the reasons:

// 1. Global Scope or Function Scope: Unlike `let` and `const` which are block-scoped (confined within the blocks they are declared), `var` is function-scoped or globally scoped. This can lead to variable collisions if the same variable name is used in different parts of a codebase, especially in large projects.

// 2. Hoisting: Variables declared with `var` are hoisted to the top of their scope, but not their assignments. This means they can be referenced before they are declared, leading to confusing behavior.

// 3. No Error on Re-declaration: `var` allows re-declaring the same variable within the same scope, which can lead to bugs where variables are unintentionally re-declared and overwritten.

// Best Practice: Use `let` and `const`
// To avoid these issues, it's recommended to use `let` for variables that will change and `const` for variables that should not change. Both `let` and `const` provide block-level scoping, which makes the code more readable and reduces the chance of bugs related to variable scope.

// Conclusion:
// Understanding the differences in scoping rules between `var`, `let`, and `const` is crucial for writing clean and error-free JavaScript code. Adopting `let` and `const` for variable declaration helps in managing scopes effectively and avoids common pitfalls associated with `var`.
