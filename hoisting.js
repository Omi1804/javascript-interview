// hoisting
// variables and functions are hoisted which means their declaration is moved to the top of the code

/*
which means


var a;
a=12;

so var a moves to the very top of the code (subse uper)

so if we write 

console.log(a);
var a;
a=12;
|
|

how this will gonnal resultant in is:
var a; ----> moved to the very top of the code

then runs console.log(a);

then initializations happens: a= 12;

that's why console.log(a) results in undefined
*/

hello();

function hello() {
  console.log("kyaa krre ho hoisting sikh rhe kyaa");
}

// in this example also declration moves to the very top of the code then runs hello() that's how we can use functions and variables before they were declared
