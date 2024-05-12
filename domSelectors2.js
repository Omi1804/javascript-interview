// DOM Navigation and Element Manipulation in JavaScript

// Navigating from Parent to Children
// Selecting a parent element
const parent = document.querySelector(".contentBody");
// Iterating over each child element of the parent
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML); // Logs the HTML content of each child
}
// Accessing the first and last child element directly
console.log(parent.firstElementChild); // Returns the first child of the parent element
console.log(parent.lastElementChild); // Returns the last child of the parent element

// Navigating from Children to Parent
// Selecting a child element
const openTerm = document.querySelector(".openTerm");
// Accessing the parent element of the selected child
console.log(openTerm.parentElement); // Returns the parent element of 'openTerm'

// Navigating to Siblings
// Accessing the next sibling element in the DOM
console.log(openTerm.nextElementSibling); // Returns the next element sibling (ignores text nodes)

// Creating and Manipulating Elements
// Creating a new 'div' element
const div = document.createElement("div");
// Setting class and id attributes
div.className = "main"; // Assigns the class 'main' to the div
div.id = Math.ceil(Math.random() * 10); // Assigns a random number as id

// Setting additional attributes and styles
div.setAttribute("title", "generatedTitle"); // Sets a title attribute for the div
div.style.backgroundColor = "green"; // Sets the background color of the div

// Adding Text to the Created Element
// div.innerText = "Chai Aur Code"; // Directly setting text inside the element
// OR
const addText = document.createTextNode("Chai Aur Node"); // Creating a text node
div.appendChild(addText); // Appending the text node to the div

// Appending the New Element to the DOM
// To append the created element to the document body
document.body.appendChild(div); // Adds the 'div' to the end of the document body

console.log(div); // Outputs the newly created and configured div element to the console

// Conclusion:
// These methods and techniques provide a comprehensive set of tools for navigating and manipulating the DOM in JavaScript.
// Understanding how to move between elements (parents, children, siblings) and how to create, modify, and append elements dynamically is essential for interactive web development.
