//there are two types of datatypes: primitive and references
//primitive are those jiski copy krne p copy ho jaae --> number, boolean, null, string
//reference are those jiski direct copy krne p copy na ho balki uska reference pass ho basss -->
// esme jaare brackets wale aate h i.e., () {} [] mtlb array , objects and functions

let score = "92ab";
console.log(score);

console.log(typeof score);

const valueInNumber = Number(score); //but it will give NAN if the original string dont have pure numbers

console.log(valueInNumber);

//Number()
//"33" => 33
//"33abc" => NaN
//true" => 1, false" => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//Boolean
//1=>ture;
//"" => false
//"om"=> true

let someNumber = "33abc";
let stringNumber = String(someNumber);

console.log(stringNumber);
