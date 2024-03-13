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
