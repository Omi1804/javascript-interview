// ES6 Classes vs. ES5 Constructor Functions in JavaScript

// ES6 introduced classes to JavaScript as a syntactic sugar over the existing prototype-based inheritance, making it easier to write and manage constructors and prototypes.

/*
Class Syntax in ES6
-------------------
Classes in ES6 provide a much clearer and simpler syntax for creating constructor functions and handling inheritance.
*/
class User {
  // The constructor method is a special method for creating and initializing objects created with a class.
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Method defined within the class
  encryptPassword() {
    // This method simulates a simple "encryption" which appends 'abc' to the password.
    return `${this.password}abc`;
  }

  changeUserName() {
    // Method to change the username to uppercase
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword()); // Outputs: '123abc'
console.log(chai.changeUserName()); // Outputs: 'CHAI'

/*

ES5 Constructor Functions (Behind the Scenes)
-------------------------
Before ES6, constructor functions were used to create similar functionality. This pattern uses function constructors and explicitly extends the prototype object for inheritance.
*/

function UserES5(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// Methods are added to the prototype of the constructor function.
UserES5.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

UserES5.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const chaiES5 = new UserES5("chai", "chai@gmail.com", "123");

console.log(chaiES5.encryptPassword()); // Outputs: '123abc'
console.log(chaiES5.changeUserName()); // Outputs: 'CHAI'

// Comparison and Behind the Scenes
// - ES6 classes are internally transformed into constructor functions similar to UserES5.
// - Methods defined in ES6 classes are added to the prototype of the constructor, just as they are explicitly defined in the ES5 style.
// - Using classes makes code cleaner and closer to object-oriented syntax found in other languages, improving readability and maintainability.

// Conclusion:
// ES6 classes do not introduce a new object-oriented inheritance model to JavaScript. They simply provide syntactic sugar over the existing prototype-based inheritance model. This syntax is clearer and more concise, making it easier to work with complex inheritance structures.
