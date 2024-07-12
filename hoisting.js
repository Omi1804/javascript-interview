// Hoisting
// Variables and functions are hoisted, which means their declarations are moved to the top of the code.

/*
This means that when we write:

var a;
a = 12;

The declaration `var a` is moved to the top of the code.

So, if we write:

console.log(a);
var a;
a = 12;

It results in:

var a; // Declaration is hoisted to the top
console.log(a); // This logs 'undefined' because 'a' is declared but not yet assigned a value
a = 12; // Initialization happens here

That's why console.log(a) results in 'undefined'.
*/

// Example with function hoisting

hello();

function hello() {
  console.log("Kyaa krre ho, hoisting sikh rhe kyaa");
}

// In this example, the function declaration `function hello()` is hoisted to the top of the code.
// This allows us to call `hello()` before the function is defined.
