// Understanding Static Methods in JavaScript ES6 Classes

// The 'static' keyword defines a static method for a class. Static methods are called without instantiating their class
// and cannot be called through a class instance. Static methods are often used to create utility functions for an application.

class User {
  constructor(username) {
    this.username = username; // Sets the username property for each new instance
  }

  logMe() {
    // Instance method accessible on each instance of the class
    console.log(`username: ${this.username}`);
  }

  // Static method inaccessible to class instances and used without instantiating the class
  static createId() {
    // Returns a random ID
    return Math.ceil(Math.random() * 100000);
  }
}

// Creating an instance of User
const Om = new User("om");

// Attempting to call a static method on an instance of the class
// console.log(Om.createId()); // This line will throw an error: TypeError: Om.createId is not a function
// The error occurs because static methods are only callable on the class itself, not on instances.

// Correct usage of the static method
console.log(User.createId()); // Correctly called on the class, outputs a random ID

// Extending the User class with a Teacher class
class Teacher extends User {
  constructor(username, email) {
    super(username); // Calls the constructor of the User class
    this.email = email; // Additional property for Teacher instances
  }
}

// Creating an instance of Teacher
const iphone = new Teacher("iphone", "iphone@phone.com");
iphone.logMe(); // Calls an inherited method from User class, outputs "username: iphone"

// Attempting to call the static method on an instance of the derived class
// console.log(iphone.createId()); // This also results in an error because static methods are not inherited to instances.
// Static methods are not accessible through instances of the class or its subclasses, reinforcing their utility nature.

// Key Points:
// - Static methods are used for functionalities that do not require knowledge of individual class instances.
// - They can be called directly on the class itself, not on objects instantiated from the class.
// - Static methods are commonly used for utility functions that perform a task independent of the state of class instances.
// - Unlike instance methods, static methods are not available on the instances of the class but can be called on the class itself and its subclasses directly.

// Conclusion:
// Static methods in JavaScript provide a powerful way to encapsulate functionality that does not need access to an object's instance properties.
// They enforce a clear separation between what actions belong to instances of a class versus actions that belong to the class itself.
