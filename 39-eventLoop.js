/**
 * ============================================
 * JAVASCRIPT EVENT LOOP - COMPLETE NOTES
 * ============================================
 *
 * Event Loop is the mechanism that allows JavaScript (single-threaded)
 * to handle asynchronous operations without blocking main execution.
 *
 * JavaScript engine runs code in one Call Stack, but async work is handled
 * by browser/Node APIs and then scheduled back through queues.
 */

/**
 * --------------------------------------------
 * 1) CORE PARTS OF EVENT LOOP
 * --------------------------------------------
 *
 * 1. Call Stack
 *    - Where function execution happens (LIFO).
 *
 * 2. Web APIs / Node APIs
 *    - setTimeout, DOM events, fetch/XHR, etc.
 *    - They run outside JS call stack.
 *
 * 3. Callback Queue (Task Queue / Macrotask Queue)
 *    - setTimeout, setInterval, DOM events, MessageChannel, postMessage
 *
 * 4. Microtask Queue (Higher priority)
 *    - Promise.then/catch/finally, queueMicrotask, MutationObserver
 *
 * 5. Event Loop
 *    - Continuously checks:
 *      a) Is Call Stack empty?
 *      b) If yes, run all Microtasks.
 *      c) Then run one Macrotask.
 *      d) Browser may render frame between turns.
 */

/**
 * --------------------------------------------
 * 2) IMPORTANT RULES
 * --------------------------------------------
 *
 * RULE A:
 * Synchronous code executes first.
 *
 * RULE B:
 * All microtasks are completed before next macrotask.
 *
 * RULE C:
 * setTimeout(fn, 0) does NOT run immediately.
 * It runs only when stack is empty and after microtasks.
 *
 * RULE D:
 * If microtasks keep adding microtasks, macrotasks/rendering can starve.
 */

/**
 * --------------------------------------------
 * 3) SIMPLE FLOW EXAMPLE
 * --------------------------------------------
 */

console.log("A: sync start");

setTimeout(() => {
  console.log("D: macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("C: microtask (promise)");
});

console.log("B: sync end");

// Output:
// A: sync start
// B: sync end
// C: microtask (promise)
// D: macrotask (setTimeout)

/**
 * --------------------------------------------
 * 4) CALLBACK QUEUE (MACROTASKS)
 * --------------------------------------------
 * Common sources:
 * - setTimeout / setInterval
 * - I/O callbacks
 * - DOM events (click, input)
 * - postMessage / MessageChannel
 *
 * Macrotasks are processed one at a time.
 */

/**
 * --------------------------------------------
 * 5) MICROTASK QUEUE
 * --------------------------------------------
 * Common sources:
 * - Promise handlers
 * - queueMicrotask
 * - MutationObserver (browser)
 *
 * After current sync code finishes, JS drains ALL microtasks before
 * touching the macrotask queue.
 */

queueMicrotask(() => console.log("Microtask 1"));
Promise.resolve().then(() => console.log("Microtask 2"));
setTimeout(() => console.log("Macrotask 1"), 0);

// Output order:
// Microtask 1
// Microtask 2
// Macrotask 1

/**
 * --------------------------------------------
 * 6) PROMISE CHAIN & MICROTASK DRAINING
 * --------------------------------------------
 */

Promise.resolve()
  .then(() => {
    console.log("P1");
  })
  .then(() => {
    console.log("P2");
  })
  .then(() => {
    console.log("P3");
  });

setTimeout(() => console.log("Timer"), 0);

// Output:
// P1
// P2
// P3
// Timer

/**
 * --------------------------------------------
 * 7) setTimeout MINIMUM DELAY (NESTED TIMERS)
 * --------------------------------------------
 * Browsers apply clamping for deeply nested timers (commonly ~4ms).
 * So repeated setTimeout(fn, 0) may not truly stay 0ms.
 */

/**
 * --------------------------------------------
 * 8) RENDERING + EVENT LOOP (BROWSER)
 * --------------------------------------------
 * Browser generally:
 * - Runs one task
 * - Drains microtasks
 * - May render (paint)
 *
 * Heavy synchronous JS blocks rendering.
 * Too many microtasks can also delay rendering.
 */

/**
 * --------------------------------------------
 * 9) requestAnimationFrame vs setTimeout
 * --------------------------------------------
 * requestAnimationFrame:
 * - Runs before next repaint
 * - Best for UI animations
 *
 * setTimeout:
 * - Time-based callback
 * - Not synced with frame rendering
 */

/**
 * --------------------------------------------
 * 10) BROWSER APIs THAT LOOK ASYNC
 * --------------------------------------------
 * fetch() returns Promise:
 * - Network runs in browser/Node internals
 * - Promise resolution callback goes to microtask queue
 */

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => {
    console.log("Fetched todo id:", data.id);
  })
  .catch((err) => {
    console.log("Fetch error:", err.message);
  });

/**
 * --------------------------------------------
 * 11) NODE.JS EVENT LOOP (INTERVIEW IMPORTANT)
 * --------------------------------------------
 * Node has phases (high-level):
 * - timers
 * - pending callbacks
 * - idle/prepare
 * - poll
 * - check (setImmediate)
 * - close callbacks
 *
 * Extra queues in Node:
 * - process.nextTick queue (very high priority)
 * - Promise microtask queue
 *
 * Priority in Node turn (simplified):
 * 1) current sync code
 * 2) process.nextTick callbacks
 * 3) Promise microtasks
 * 4) phase-specific macrotasks
 */

// Node-only example (safe check so browser doesn't break):
if (typeof process !== "undefined" && typeof process.nextTick === "function") {
  setTimeout(() => console.log("Node timer"), 0);
  setImmediate(() => console.log("Node setImmediate"));

  Promise.resolve().then(() => console.log("Node promise microtask"));
  process.nextTick(() => console.log("Node nextTick"));

  // Typical Node order (context dependent but commonly):
  // Node nextTick
  // Node promise microtask
  // Node timer
  // Node setImmediate
}

/**
 * --------------------------------------------
 * 12) TRICKY INTERVIEW OUTPUT EXAMPLE
 * --------------------------------------------
 */

console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => console.log("3"));
}, 0);

Promise.resolve().then(() => console.log("4"));

console.log("5");

// Output:
// 1
// 5
// 4
// 2
// 3

/**
 * --------------------------------------------
 * 13) WHY EVENT LOOP IS NEEDED
 * --------------------------------------------
 * Without event loop, async operations would block main thread.
 * Event loop allows non-blocking behavior with a single-threaded JS model.
 */

/**
 * --------------------------------------------
 * 14) COMMON MISTAKES
 * --------------------------------------------
 * - Thinking setTimeout(..., 0) runs instantly.
 * - Assuming Promise callback is "same as setTimeout".
 * - Forgetting microtasks run before macrotasks.
 * - Creating infinite microtask chains that freeze UI updates.
 */

/**
 * --------------------------------------------
 * 15) ONE-LINE SUMMARY
 * --------------------------------------------
 * JS runs sync code on call stack, then drains microtasks,
 * then executes one macrotask, and repeats this cycle via event loop.
 */
