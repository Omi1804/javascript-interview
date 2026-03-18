// Immediately Invoked Function Expressions (IIFEs) in JavaScript

// IIFEs are functions that run as soon as they are defined. They are a powerful feature of JavaScript
// that enables encapsulation of code and avoids polluting the global namespace. This pattern is particularly
// useful in scenarios where code should execute immediately without interfering with other parts of the application.

// Use Cases:
// 1. Initializing applications or systems: IIFEs can be used to perform setup tasks such as establishing database connections.
// 2. Creating a private scope for variables and functions: By wrapping code inside an IIFE, you prevent it from affecting the global scope,
//    protecting it from conflicts with other scripts and variables.

// Example of a Named IIFE
// Here, the IIFE is named `chai`. Note that the name is only visible within the function's scope and cannot be used to invoke the function again.
(function chai() {
  console.log("DB Connected");
})(); // The function is defined and immediately invoked.

// This pattern, although syntactically valid, is less common because the primary use case of IIFEs is to avoid naming conflicts.

// Example of an Unnamed IIFE
// More commonly, IIFEs are defined without a name, focusing solely on immediate execution and scope encapsulation.
(() => {
  console.log("DB Connected2");
})(); // An arrow function version of IIFE, concise and immediately invoked.

// Example of a Parameterized IIFE
// IIFEs can accept parameters, allowing data to be passed into the immediate execution context.
((name) => {
  console.log("My name is " + name);
})("OM"); // The string "OM" is passed as an argument to the IIFE, demonstrating how to supply parameters to IIFEs.

// Writing IIFEs:
// The syntax for an IIFE involves two main parts: the function definition and the immediate invocation.
// - The function definition is wrapped in parentheses `()`, which creates a function expression.
// - The immediate invocation is done using another set of parentheses `()`, which may include parameters if needed.

// Conclusion:
// IIFEs provide a convenient syntax for executing functions immediately upon definition.
// They are particularly useful for initializing code in a self-contained manner and avoiding global namespace pollution.
// By using IIFEs, developers can maintain cleaner, more modular, and conflict-free JavaScript code.
