/**
 * ============================================
 * HIGHER ORDER FUNCTIONS (HOF) - JS NOTES
 * ============================================
 *
 * Definition:
 * → A Higher Order Function is a function that:
 *    1. Takes another function as an argument, OR
 *    2. Returns another function
 *
 * In simple words:
 * → Function that works with another function
 */

/**
 * --------------------------------------------
 * 🎯 EXAMPLE 1: Function as Argument
 * --------------------------------------------
 */

function greet(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  const name = "Om";
  return callback(name);
}

// HOF because it takes a function as argument
processUserInput(greet);

/**
 * --------------------------------------------
 * 🎯 EXAMPLE 2: Function Returning Function
 * --------------------------------------------
 */

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

// HOF because it returns a function
const double = multiply(2);
console.log(double(5)); // 10

/**
 * --------------------------------------------
 * ⚡ COMMON HOFs IN JAVASCRIPT
 * --------------------------------------------
 *
 * These built-in methods are Higher Order Functions:
 */

const nums = [1, 2, 3, 4];

// map
const doubled = nums.map((num) => num * 2);

// filter
const even = nums.filter((num) => num % 2 === 0);

// reduce
const sum = nums.reduce((acc, num) => acc + num, 0);

// forEach
nums.forEach((num) => console.log(num));

/**
 * --------------------------------------------
 * 🧠 WHY WE USE HOF
 * --------------------------------------------
 *
 * → Code reusability
 * → Cleaner and readable code
 * → Avoid repetition
 * → Functional programming style
 */

/**
 * --------------------------------------------
 * ⚛️ REACT EXAMPLES (IMPORTANT)
 * --------------------------------------------
 */

// React.memo (HOF)
const MemoComponent = React.memo(function Component() {
  return <div>Hello</div>;
});

// Higher Order Component (HOC)
function withAuth(Component) {
  return function WrappedComponent(props) {
    const isLoggedIn = true;

    return isLoggedIn ? <Component {...props} /> : <div>Please Login</div>;
  };
}

/**
 * --------------------------------------------
 * ⚡ HOF vs HOC
 * --------------------------------------------
 *
 * HOF:
 * → Works with functions
 * → General JavaScript concept
 *
 * HOC:
 * → Works with React components
 * → Built using HOF concept
 */

/**
 * --------------------------------------------
 * 🧠 ONE-LINE SUMMARY
 * --------------------------------------------
 *
 * Higher Order Function:
 * → A function that takes or returns another function
 *
 */
