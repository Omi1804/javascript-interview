// JavaScript DOM Manipulation and Selection

// Selecting Elements from the DOM

// Using `getElementsByClassName` to select elements by their class name
const heading = document.getElementsByClassName("mainHeading"); // Returns a live HTMLCollection of elements with the specified class name.

// Using `getElementById` to select a single element by its ID
const heading2 = document.getElementById("heading"); // Returns a reference to the element by its ID.

// Working with Attributes and Styles

// Getting an attribute's value
console.log(document.getElementById("heading").getAttribute("class")); // Retrieves the class attribute of the element with ID 'heading'.

// Setting an attribute's value
console.log(document.getElementById("heading").setAttribute("class", "test")); // Sets the class attribute of the element with ID 'heading', replacing any existing classes.

// Changing styles directly via JavaScript
// heading2.style.backgroundColor = "red"; // Changes the background color of 'heading2' to red.
// heading2.style.border = "1px solid red"; // Adds a red border to 'heading2'.

// Adding and Retrieving Content in the DOM

// `textContent` vs `innerText` vs `innerHTML`
console.log(heading2.textContent); // Retrieves all content of 'heading2', including text hidden via CSS (e.g., display: none).
console.log(heading2.innerText); // Retrieves visible text only. It respects styling and does not return text that is hidden.
console.log(heading2.innerHTML); // Retrieves all HTML content within 'heading2', including tags.

// Differences:
// `textContent` gives text content of all elements, including script and style elements, without any styling.
// `innerText` is aware of styling and won't return the text of "hidden" elements.
// `innerHTML` returns the content of an element, including all HTML tags.

// Most Common Selectors

// `querySelector` - a versatile selector that can use any CSS selector string
document.querySelector("h1"); // Returns the first <h1> element found in the DOM.
document.querySelector("#heading"); // Returns the first element with the ID 'heading'.
document.querySelector(".heading"); // Returns the first element with the class 'heading'.
document.querySelector('input[type="password"]'); // Selects the first <input> element with type 'password'.

// `querySelectorAll` - similar to `querySelector` but returns a NodeList of all matching elements
console.log(document.querySelectorAll("span")); // Returns a NodeList of all <span> elements in the document.
// Note: NodeList objects are collections of nodes, similar to arrays but not exactly the same. They can be looped over with `forEach`.

// Iterating over NodeList with `forEach`
const spans = document.querySelectorAll("span");
spans.forEach(function (sp) {
  console.log(sp);
});

// Converting NodeList to Array to use array methods like `map`
// `Array.from` method converts a NodeList to an array
Array.from(spans).map(function (node) {
  console.log(node.innerText); // Using `map` to log the innerText of each node.
});

// Conclusion:
// These methods and properties provide powerful tools for selecting and manipulating HTML elements and their attributes/styles.
// Understanding the differences between text selection properties (`textContent`, `innerText`, `innerHTML`) and knowing when to use `querySelector` vs `getElementsByClassName`/`getElementById` is crucial for effective DOM manipulation.
