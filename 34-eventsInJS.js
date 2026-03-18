// JavaScript Event Handling: Click Events and Event Listeners

// Issues with onclick on classNames
// `getElementsByClassName` returns an HTMLCollection, not a single element, so it doesn't support direct assignment of event handlers.
// document.getElementsByClassName("contentBody").onclick = function () { alert("clicked"); }; // Incorrect usage, will not work.

// Correct usage with getElementById (Older way)
// This method directly assigns an event handler to an element with a specific ID.
document.getElementById("contentBody").onclick = function () {
  alert("clicked");
};

// More Optimized Way Using addEventListener
// `addEventListener` is preferred over `onclick` because it allows handling multiple listeners and gives finer control over event propagation.
document.getElementById("contentBody").addEventListener(
  "click",
  function (e) {
    console.log(e); // Logs the event object which contains numerous properties and methods.
  },
  false
);

// Understanding Event Object and Propagation
// Key event properties: type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY, altKey, ctrlKey, shiftKey

// Demonstration of Event Bubbling and Capturing
// Event bubbling is the default behavior where an event triggered on an element first triggers on the element itself, then bubbles up to its ancestors.
document.getElementById("contentBody").addEventListener(
  "click",
  function (e) {
    console.log("contentBody clicked");
  },
  false // Event bubbling mode
);

document.getElementById("openTerm").addEventListener(
  "click",
  function (e) {
    console.log("openTerm clicked");
    e.stopPropagation(); // Stops the event from bubbling up to parent elements
  },
  false
);

// Event capturing occurs when the event is first captured by the outermost element and propagated to the inner elements.
// If we want the parent event to trigger before the child event, we set the third argument of addEventListener to `true`.
// Example not shown here, as it would require changing `false` to `true`.

// Using e.stopPropagation() and e.preventDefault()
// `e.stopPropagation()` prevents further propagation of the current event in the capturing and bubbling phases.
// `e.preventDefault()` can stop the default action the browser takes on the event, e.g., prevent a link from following the URL.

// Practical Example: Click to Disappear
// Setting up an event listener on the `#contentBody` to remove any span element clicked within it.
document.querySelector("#contentBody").addEventListener(
  "click",
  function (e) {
    const elem = e.target; // Gets the clicked element
    if (elem.tagName === "SPAN") {
      // Checks if the clicked element is a span
      elem.remove(); // Removes the clicked span from the DOM
    }
  },
  false
);

// Conclusion:
// Understanding the differences between direct event handling (using `onclick`) and `addEventListener` is crucial.
// `addEventListener` provides more control over how events are handled and allows for multiple event handlers on a single element.
// Knowing when to use event bubbling and capturing can help manage complex event interactions in applications effectively.
