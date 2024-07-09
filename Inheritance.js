// Demonstrating Class Inheritance in JavaScript ES6

// Base Class Definition
class User {
  constructor(username) {
    this.username = username; // Initializes the username property
  }

  logMe() {
    console.log(`Username is ${this.username}`); // Method to log the username
  }
}

// Derived Class Definition
// The Teacher class extends the User class, inheriting its methods and properties.
class Teacher extends User {
  constructor(username, email, password) {
    super(username); // Calls the constructor of the User class
    // The super() function calls the parent class' constructor with the current values,
    // ensuring that the User class properties are initialized before adding new ones.

    //this will take current execution context and username and referes back to the parent class , do its functionality there and retains it

    //this saves us from manually calling the .call method and sending the current execution context

    this.email = email; // Additional properties specific to the Teacher class
    this.password = password;
  }

  addCourses() {
    console.log(`A new course is added by ${this.username}`); // Additional method specific to the Teacher class
  }
}

// Creating an instance of the Teacher class
const chai = new Teacher("chai", "chai@gmail.com", "1234");
chai.addCourses(); // Outputs: A new course is added by chai
// The chai instance can access methods from both the Teacher and User classes.

// Creating an instance of the User class
const tea = new User("tea");

// Attempting to access a method not available in the User class
// tea.addCourses();  // Uncommenting this line will throw an error because the User class does not have the addCourses method.

tea.logMe(); // Outputs: Username is tea
// The tea instance can only access methods defined in the User class.

// Explanation:
// - **Inheritance** allows us to define a class in terms of another class, making it easier to create and maintain an application.
// - The `Teacher` class extends `User`, meaning it inherits all of User’s functionalities and can also have its own additional methods and properties.
// - The `super()` in the constructor is used to call the parent class' constructor, passing it necessary parameters.
//   This ensures that the inherited properties are correctly initialized before the new class adds or modifies any properties.
// - This model promotes code reusability and encapsulation—common properties and methods need only be written once in the User class.

// Benefits:
// - **Reusability**: Code written for the User class need not be rewritten for the Teacher class.
// - **Simplicity**: It simplifies the management of related classes by allowing the derived class to inherit common functionality from its parent.
// - **Extensibility**: It is easy to add more roles, like Student or Admin, each extending User while adding specific properties or methods.

// Conclusion:
// Class inheritance is a powerful feature in JavaScript that helps manage and scale applications by allowing classes to inherit properties and methods from other classes.
