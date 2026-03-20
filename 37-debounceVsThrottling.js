/**
 * ============================================
 * THROTTLING vs DEBOUNCING (React / JS)
 * ============================================
 *
 * These are techniques used to control how often
 * a function executes when events fire frequently.
 */

/**
 * --------------------------------------------
 * 🟢 THROTTLING
 * --------------------------------------------
 *
 * Definition:
 * → Throttling ensures a function runs
 *   at most once in a given time interval.
 *
 * In simple words:
 * → "Keep running, but at a limited rate"
 *
 * Behavior:
 * → Executes repeatedly at fixed intervals
 * → Works even while user is still active
 *
 * Example:
 * → Scroll event
 * → Function runs every 500ms while scrolling
 */

/**
 * --------------------------------------------
 * 🔵 DEBOUNCING
 * --------------------------------------------
 *
 * Definition:
 * → Debouncing ensures a function runs only
 *   after a certain delay once the user stops
 *   triggering the event.
 *
 * In simple words:
 * → "Wait until user stops, then run once"
 *
 * Behavior:
 * → Cancels previous calls if triggered again
 * → Executes only once after inactivity
 *
 * Example:
 * → Search input
 * → API call after user stops typing
 */

/**
 * --------------------------------------------
 * ⚡ KEY DIFFERENCE
 * --------------------------------------------
 *
 * Throttling:
 * → Runs every X milliseconds
 * → Continuous execution
 *
 * Debouncing:
 * → Runs after X milliseconds of inactivity
 * → Executes only once
 */

/**
 * --------------------------------------------
 * 🧠 USE CASES
 * --------------------------------------------
 *
 * Use Throttling:
 * → Scroll events
 * → Resize events
 * → Mouse movement
 *
 * Use Debouncing:
 * → Search bar input
 * → API calls while typing
 * → Form validation
 */

/**
 * --------------------------------------------
 * 💻 THROTTLE IMPLEMENTATION
 * --------------------------------------------
 */

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

/**
 * --------------------------------------------
 * 💻 DEBOUNCE IMPLEMENTATION
 * --------------------------------------------
 */

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * --------------------------------------------
 * 🧠 ONE-LINE SUMMARY
 * --------------------------------------------
 *
 * Throttle  → "Run continuously, but slower"
 * Debounce  → "Run once, after user stops"
 *
 */
