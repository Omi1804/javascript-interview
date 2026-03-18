//Prototypes in JavaScript

const heros = ["hulk", "ironman"];

console.log(heros);
//As you inspect this console you'll find array inside which there is prototype method once you open that it has its own object prototype method

//hence js has prototypial behaviour i.e., it can go on and on to the deep of the element until i gets retured null

//for EX: Arrya ---> internally has object prototype ---> then prototype stops here
//or String --> It also has object prototype

//hence we can say that everything in javascript is object originally

//In case of functions
function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(2)); //gives normal result
console.log(multipleBy5.power); //here we can observe that .power method also gets added to function just like object
console.log(multipleBy5.prototype); //by this we can see {} . prototype also contains context of the function and this keyword is related to it only.

//hence Functions also ---> internally has object prototype ---> then prototype stops here

//hence we can make everything in javascript behaves as objects

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

//we can create our own methods inside prototype of functions like
createUser.prototype.increment = function () {
  this.score++; //to giving the context of current object we give this keyword
};
createUser.prototype.printMe = function () {
  console.log(this.score);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 30);

chai.printMe();
tea.printMe();
console.log(createUser);
//here we can see that new methods got added to the prototype of the function but set new context every time we have to use new keyword

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initialtes the createion of a new JS object.

A prototype is linked: the new created object gets linked to the prototype property of the constructior funciton. this means that it has access to properties and methods defined on the constructor's prototype

The contructor is called: The constructor funciotn is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified form the constructor, javascript assumes this, the newly created object, to be the intended return value.

The new Object is returned: After the contructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.) the newly created object is returned
*/

//more About prototypes

let myName = "Om     ";

//now i want myNmae to have inbuilt some method like trueLenght that can give me actual lenght of the number

//we also want all the strings should have method trueLength
// console.log(myName.trueLength);

//so want we can do now is to inject the method in the global object only so that it then can be get by any functions or variables

Object.prototype.om = function () {
  console.log("OM is present in every thing");
};

heros.om(); //we can see that om method is present
myName.om(); //anything now wheather its an function or variable or any datatype it all has om method as we have injected the method in global object and everything internally is object only

//linking Objects throug proto keyword
const user = {
  username: "om",
  email: "om@example.com",
};

const details = {
  salary: "100,00,000",
  postion: "CEO",
  __proto__: user, //this links all the prototypes of user to details
};
//this is only called inheritance

//modern syntax for linking is
Object.setPrototypeOf(details, user);

//so to solve the above problem of giving every string a method of truelength

String.prototype.trueLength = function () {
  console.log(this.trim().length);
};

myName.trueLength();
