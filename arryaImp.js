//Array ekk reference datatype hai... jesa ki hame yaad hai ki saare brackerts wale datatypes reference wale hote h...(), {}, []
// reference types mtlb enki values direct copy nhi ki jaa skti sirf ekk reference create hota h

let a = [1, 2, 3, 4, 5];
let b = a;

b.pop();

//here we can aslo see that ki array a se bhi ekk element pop ho gya blki hmen sirf b se pop kiya tha
// this is called reference type variables

//Arrays always does shallow copies through copy operations
//shallow copy of an object is the copy whose properties shares the same references
//deep copy of the object is the copy whose properties do not share the same references

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myHeroes = ["shaktiman", "nagarjun"];

const myArray2 = new Array(1, 2, 3, 4);

//To make the deeep copy in arrays we use spread operator
let a2 = [1, 2, 3, 4, 5];
let b2 = [...a2]; //yaha prr eska simple mtlb h ki jaha ...a2 hai waha a2 ki saari values b2 k andr aa jaae no ki reference aa jaae
// b2 will be like b2 = [1,2,3,4] and now if we do

b2.pop(); //a2 does not loose any elements

// same can be applied for the objects also

//++++++++++++ Array methods +++++++++

// myArr.push(6);
// myArr.pop();

//myArr.unshift(9); //adds value to the very beginning of the array

myArr.shift(); //removes value from the very beginning of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(11)); //gives the index of the item and if not then -1

const newArr = myArr.join(); //adds all the elements into the string seperated by commans

// console.log(myArr);
// console.log(newArr);

//-----------Slice and splice--------------------------------

console.log("Prev ", myArr);

const myn1 = myArr.slice(1, 3); //returns the section of the arrya but does not change the original array
//and slice does not includes the last character of the array
//and slice can also be used in strings

//in strings
//to get the first n characters = myArr.slice(0,n)
//to remove first n characters = myArr.slice(n)
//to remove the last n characters in stirng and give the result = myArr.slice(0,-n); eg: abcdefg -> abcd

//in general
// slice(3)-->give you the array without first 3 characters
//slice(0,3)-->gives you the array of first 3 characters

console.log(myn1);

console.log("After ", myArr);

console.log("Prev ", myArr);

const myn2 = myArr.splice(1, 3); //returns the section of the array and also deletes that section of array form the original array
//splice includes the last element in the array
//splice cannot be used with strings

console.log(myn2);

console.log("After ", myArr);

//split

//questions to find number of time a present in string b
function myFunction(a, b) {
  // let count = 0;
  // let position = b.indexOf(a);

  // while(position!=-1){
  //   count++;
  //   position = b.indexOf(a, position+1);
  // }

  // return count;
  return b.split(a).length - 1;
}

console.log(
  myFunction("m", "how many times does the character occur in this sentence?")
);

// Note: Array asal m arrays hote hi nhi h wo objects hote h
let arr = [1, 2, 3, 4, 5];
//actually these are internally saved as
let actualarr = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
};
