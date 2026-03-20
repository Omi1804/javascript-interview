/**
 * ============================================
 * CONTEXT API vs REDUX (Simple Explanation)
 * ============================================
 *
 * Both Context API and Redux are used to:
 * → Avoid prop drilling
 * → Share data globally in React
 *
 * BUT they behave very differently internally.
 */

/**
 * --------------------------------------------
 * 🧠 CORE DIFFERENCE
 * --------------------------------------------
 *
 * Context API  = Broadcast system
 * Redux        = Targeted update system
 *
 * Context → "Something changed, everyone re-render"
 * Redux  → "Only update the components that need it"
 */

/**
 * --------------------------------------------
 * 📦 EXAMPLE SCENARIO
 * --------------------------------------------
 *
 * Suppose we have:
 *
 * - Profile Component → uses `user`
 * - Theme Component → uses `theme`
 * - Notification Component → uses `notifications`
 *
 */

/**
 * --------------------------------------------
 * ❌ USING CONTEXT API
 * --------------------------------------------
 *
 * If theme changes:
 *
 * → Profile re-renders ❌ (doesn't need it)
 * → Notification re-renders ❌ (doesn't need it)
 * → Theme re-renders ✅
 *
 * Reason:
 * Context doesn't know WHAT changed,
 * it only knows THAT something changed.
 */

/**
 * --------------------------------------------
 * ✅ USING REDUX
 * --------------------------------------------
 *
 * If theme changes:
 *
 * → Profile re-renders ❌
 * → Notification re-renders ❌
 * → Theme re-renders ✅
 *
 * Reason:
 * Redux tracks exactly what each component uses.
 */

/**
 * --------------------------------------------
 * ⚡ KEY DIFFERENCE IN ONE LINE
 * --------------------------------------------
 *
 * Context → Updates EVERYTHING
 * Redux  → Updates ONLY what is needed
 */

/**
 * --------------------------------------------
 * 🚨 WHY CONTEXT CAN CAUSE PROBLEMS
 * --------------------------------------------
 *
 * In large apps:
 * → Many components re-render unnecessarily
 * → Performance becomes slow
 *
 * Because:
 * Context triggers re-render for ALL consumers
 */

/**
 * --------------------------------------------
 * 🎯 WHEN TO USE CONTEXT
 * --------------------------------------------
 *
 * Use Context when:
 * → App is small
 * → Data is simple (theme, user, language)
 * → Updates are rare
 */

/**
 * --------------------------------------------
 * 🚀 WHEN TO USE REDUX
 * --------------------------------------------
 *
 * Use Redux when:
 * → App is large
 * → Many components depend on state
 * → Frequent updates happen
 * → Performance matters
 */

/**
 * --------------------------------------------
 * 💥 IMPORTANT TRUTH
 * --------------------------------------------
 *
 * Problem is NOT prop drilling ❌
 *
 * Real problem is:
 * → Unnecessary re-renders
 *
 * Redux solves that better than Context.
 */

/**
 * --------------------------------------------
 * 🧠 FINAL SUMMARY
 * --------------------------------------------
 *
 * Context API:
 * → Simple
 * → Easy to use
 * → But causes extra re-renders
 *
 * Redux:
 * → Slightly complex
 * → But optimized and scalable
 *
 */
