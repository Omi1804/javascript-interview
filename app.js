//Promises in details

//The promise object represents the eventual conpletion (or failure) of an asynchronous operation and its resulting value.

//creating new promise --> it contains callback function
const promiseOne = new Promise(function (resolve, reject) {
  //do any async operations
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

//.then has direct connection to resolve and automatically contains the value which is returned by resolve
promiseOne.then(function () {
  console.log("Promise consumed");
});

//second way of writing the promise are
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//passing the arguments with promises
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Chain", email: "example.com" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data);
});

//using reject
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

//we can chain the .then function for multiple extractoin of values each .then connects to another .then
promiseFour
  .then((data) => {
    console.log(data);
    return data.msg;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Task done for promise four");
  });

// resolving promises with async and await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ msg: "Promise 5 resolved" });
    } else {
      reject({ msg: "Promise 5 given the error :(" });
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
