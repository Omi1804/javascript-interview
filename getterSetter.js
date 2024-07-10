// Using Getters and Setters for Fine-Grained Control over Properties

// In JavaScript, getters and setters are special methods that provide you with the ability to get and set the values
// of private variables within an object. They are particularly useful for adding validation, logging, or other side effects
// when properties are accessed or modified.

// Using ES6 Classes with Getters and Setters
class User {
  constructor(email, password) {
    this._email = email; // Using underscore to denote a private property
    this._password = password;
  }

  // Getter and setter for password
  set password(newPassword) {
    // Validation or transformation logic could be added here
    this._password = newPassword;
  }

  get password() {
    // Typically, getters can format or compute a return value based on internal properties
    return this._password.toUpperCase();
  }

  // Getter and setter for email
  set email(newEmail) {
    this._email = newEmail;
  }

  get email() {
    // Additional operations like logging could be performed here
    return this._email.toLowerCase();
  }
}

const histesh = new User("hit@hitesth.ai", "123");
console.log(histesh.password); // Outputs: '123' in uppercase
console.log(histesh.email); // Outputs: email in lowercase

// It's crucial to avoid naming the internal property the same as the getter/setter to prevent infinite recursion.
// Using _email and _password avoids conflicts with the public getter and setter names.

// Implementing Getters and Setters in Constructor Functions
function User2(email, password) {
  // Private variables are declared within the function scope
  let _email = email;
  let _password = password;

  // Define properties with getters and setters
  Object.defineProperty(this, "email", {
    get: function () {
      return _email.toUpperCase(); // Example transformation
    },
    set: function (newEmail) {
      _email = newEmail; // Directly modifies the private variable
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return _password.toUpperCase(); // Example transformation
    },
    set: function (newPassword) {
      _password = newPassword;
    },
  });
}

const tea = new User2("demo@gmail.com", "Abcd");
console.log(tea.email); // Outputs: 'DEMO@GMAIL.COM'
console.log(tea.password); // Outputs: 'ABCD' in uppercase

// Conclusion:
// Getters and setters are powerful for managing how data is accessed and modified in an object.
// They enable encapsulating behavior around data in classes or constructor functions, ensuring that internal data structures
// can be protected and maintained properly. This is especially useful in larger, more complex applications where maintaining
// data integrity is crucial.
