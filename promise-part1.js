// Understanding Promises in JavaScript

// A Promise in JavaScript is used to handle the asynchronous operations in programs.
// It represents a value which may be available now, or in the future, or never.

// Creating a New Promise
// A Promise is created using the new Promise constructor which takes a handler function with two parameters: resolve and reject.
const promiseOne = new Promise(function (resolve, reject) {
  // Simulating an asynchronous operation using setTimeout
  setTimeout(function () {
    console.log("Async task is completed");
    resolve("Success"); // Resolve the promise with a value
  }, 1000);
});

// Consuming a Promise with .then()
// The .then() method is used to schedule a callback to be executed once the promise is successfully resolved.
promiseOne.then(function (result) {
  console.log("Promise resolved with: ", result); // Logs "Promise resolved with: Success"
});

// Another example of creating and consuming a Promise
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve("Task 2 success");
  }, 1000);
}).then(function (result) {
  console.log(result); // Logs "Task 2 success"
});

// Passing Arguments with Promises
// You can resolve a promise with any type of data, which is then passed to the .then() method.
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Chain", email: "example@example.com" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data); // Logs the object { username: "Chain", email: "example@example.com" }
});

// Using reject to handle errors
// The reject function is used to throw an error in case the asynchronous operation fails.
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ msg: "Resolved User" });
    } else {
      reject({ msg: "Error something went wrong" });
    }
  }, 1000);
});

// Handling Errors with .catch()
// The .catch() method is used to catch any errors that occur during the execution of the promise.
promiseFour
  .then((data) => {
    console.log(data);
    return data.msg;
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(err); // Logs the error object { msg: "Error something went wrong" }
  })
  .finally(() => {
    console.log("Task done for promise four"); // Always executed regardless of the promise outcome
  });

// Resolving Promises with Async/Await
// Async/Await offers a syntactic sugar on top of promises, making asynchronous code easier to write and read.
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ msg: "Promise 5 resolved" });
    } else {
      reject({ msg: "Promise 5 given the error :(" });
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive; // Waits for the promise to resolve and returns the value
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

// Conclusion:
// Promises are a core component in writing asynchronous code in JavaScript.
// They help in managing asynchronous operations by providing a mechanism to handle success or failure.
// Methods like .then(), .catch(), and .finally() provide powerful options for chaining operations and handling complex asynchronous flows.
