// Array ek reference datatype hai... jesa ki hame yaad hai ki [], {} jaise datatypes reference types hote hain
// (Note: () function syntax ka part hota hai, datatype nahi hota)
// Reference types mtlb variables actual value store nahi karte, balki uska reference (address) store karte hain

let a = [1, 2, 3, 4, 5];
let b = a;

b.pop();

// yaha hum dekh sakte hain ki array a se bhi ek element remove ho gaya
// kyunki a aur b dono same reference ko point kar rahe hain
// isliye ek variable se change karne par dusre me bhi reflect hota hai

//---------------- Copy concepts ----------------

// Arrays khud se copy nahi karte
// kuch operations (jaise spread, slice, concat) shallow copy banate hain

// Shallow copy ka matlab:
// top-level values copy hoti hain, lekin nested objects same reference share karte hain

// Deep copy ka matlab:
// har level par new copy banti hai, koi shared reference nahi hota

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myHeroes = ["shaktiman", "nagarjun"];

const myArray2 = new Array(1, 2, 3, 4);

// Spread operator shallow copy banata hai (deep copy nahi)
let a2 = [1, 2, 3, 4, 5];
let b2 = [...a2]; // yaha values copy hoti hain, reference nahi (sirf top level)

b2.pop(); // a2 par koi effect nahi padega

// Note: agar nested objects hote to spread unhe deep copy nahi karta

// same concept objects par bhi apply hota hai

//++++++++++++ Array methods +++++++++

// myArr.push(6);
// myArr.pop();

// myArr.unshift(9); // adds value to the very beginning of the array

myArr.shift(); // removes value from the very beginning of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(11)); // agar element nahi mile to -1 return karega

const newArr = myArr.join(); // array ko string me convert karta hai (comma separated)

// console.log(myArr);
// console.log(newArr);

//----------- Slice and splice --------------------------------

console.log("Prev ", myArr);

const myn1 = myArr.slice(1, 3);
// slice(start, end)
// array ka ek portion return karta hai bina original array ko change kiye
// end index include nahi hota

// strings me bhi slice use hota hai

// in strings:
// first n characters = str.slice(0, n)
// first n characters remove = str.slice(n)
// last n characters remove = str.slice(0, -n)

// general:
// slice(3) --> first 3 elements skip karke baaki return karega
// slice(0,3) --> first 3 elements return karega

console.log(myn1);

console.log("After ", myArr);

console.log("Prev ", myArr);

const myn2 = myArr.splice(1, 3);
// splice(start, count)
// yeh start index se 'count' number of elements remove karta hai
// aur original array ko modify karta hai

// splice strings par use nahi hota kyunki strings immutable hoti hain

console.log(myn2);

console.log("After ", myArr);

//---------------- split ----------------

// question: string b me character a kitni baar aata hai
function myFunction(a, b) {
  return b.split(a).length - 1;
}

console.log(
  myFunction("m", "how many times does the character occur in this sentence?"),
);

//---------------- Internal nature of arrays ----------------

// Note: JavaScript me arrays internally objects hote hain (special type of objects)
// lekin unke paas extra features hote hain jaise ordering, length property, aur array methods

let arr = [1, 2, 3, 4, 5];

// conceptually is tarah represent kiya ja sakta hai:
let actualarr = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
};
// (real array me 'length' property aur methods bhi hote hain)
