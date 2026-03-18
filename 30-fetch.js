// Using Fetch API with Async/Await

// Define an asynchronous function to fetch user data from an API.
async function getAllUsers() {
  try {
    // Making a GET request to the API endpoint to retrieve users.
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check if the fetch request was successful.
    if (!response.ok) {
      // If the server response is not ok, throw an error with the status
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parsing the JSON body of the response as JavaScript object
    const data = await response.json();

    // Logging the data to the console
    console.log(data);
  } catch (error) {
    // If there is any error (network or HTTP status error), log it to the console.
    console.log("Error fetching users:", error);
  }
}

// Calling the function to perform the fetch operation
getAllUsers();

// Understanding Fetch API Error Handling
// When you use fetch, it only rejects a promise if the request failed to make at all or if anything prevented the request from completing.
// For example, network failures, or anything that prevents the completion of the fetch call, will cause the promise to reject.
// HTTP error statuses like 404 or 500 do not cause the promise to reject. These are considered valid responses by fetch, and you must handle them explicitly by checking `response.ok` or `response.status`.

// Task Queues and Microtasks in JavaScript
// JavaScript uses an event loop to handle asynchronous operations. There are different queues for tasks including the microtask queue.
// - Fetch promises resolve to the microtask queue, which has higher priority than the callback queue (where setTimeout or setInterval callbacks go).
// - This means promises are processed at the end of the current run of the JavaScript execution before the next event loop tick starts but after any currently executing script completes.
// - This makes promise callbacks (like those from fetch) run before other callbacks waiting in the task queue, such as those scheduled with setTimeout.
