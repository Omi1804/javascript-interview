// Making AJAX Requests with XMLHttpRequest

// AJAX stands for Asynchronous JavaScript and XML. It is a technique for creating fast and dynamic web pages.
// AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.
// This means it's possible to update parts of a web page, without reloading the whole page.

// Selecting an element to display the fetched data
const heading = document.querySelector("#heading");

// URL of the API to fetch data from
const requestURL = "https://api.github.com/users/omi18";

// Creating an instance of XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configuring the GET request with the URL
xhr.open("GET", requestURL);

// Handling the response data
xhr.onreadystatechange = function () {
  // Logging the current state of the request to understand the process
  console.log(xhr.readyState); // Indicates the current state of the request

  // Explanation of readyState values:
  /*
    0	UNSENT	           Client has been created. open() not called yet.
    1	OPENED	           open() has been called.
    2	HEADERS_RECEIVED   send() has been called, and headers and status are available.
    3	LOADING	           Downloading; responseText holds partial data.
    4	DONE	           The operation is complete.
  */

  // Check if the request is completed and the response is available
  if (xhr.readyState === 4) {
    // Parsing the JSON response
    const data = JSON.parse(this.responseText);

    // Creating a new <div> and <img> element to display the fetched avatar
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.appendChild(img);

    // Setting the source and dimensions of the image
    img.setAttribute("src", data.avatar_url);
    img.setAttribute("width", "100px");
    img.setAttribute("height", "100px");

    // Appending the new elements to the existing DOM element
    heading.appendChild(div);

    console.log(data.avatar_url); // Optionally log the URL to the console
  }
};

// Sending the request to the server
xhr.send();

// Conclusion:
// The XMLHttpRequest object is used for asynchronous requests to a server.
// This object can handle all types of HTTP requests and provides detailed feedback on the status of the request.
// Handling state changes with `onreadystatechange` allows for actions to be performed based on the state of the request,
// such as updating the UI once the data is available.
