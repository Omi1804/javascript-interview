const myArr = [];

/*
    JavaScript arrays in V8 are optimized based on:
    1. Element kind (SMI, DOUBLE, PACKED)
    2. Density (Packed vs Holey)

    -------------------------------
    ELEMENT TYPES (Element Kinds)
    -------------------------------
    1. SMI_ELEMENTS:
       - Small integers only (e.g., [1, 2, 3])
       - Most optimized

    2. DOUBLE_ELEMENTS:
       - Numbers with decimals (e.g., [1.1, 2.2])
    
    3. PACKED_ELEMENTS:
       - Mixed types (e.g., numbers + strings + objects)

    -------------------------------
    DENSITY
    -------------------------------
    1. PACKED (Dense):
       - No gaps (best performance)

    2. HOLEY:
       - Has missing indexes (slower)

    --------------------------------
    IMPORTANT:
    --------------------------------
    - Transitions happen ONE WAY (generally):
      SMI → DOUBLE → PACKED

    - Packed → Holey is also one-way.
      Once holey, it usually stays holey.

    - Engines may internally optimize further,
      but you should assume "no going back".
*/

const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS (best case)

// Adding a float → converts to DOUBLE
arrTwo.push(1.9);
// PACKED_DOUBLE_ELEMENTS

// Adding a string → converts to PACKED
arrTwo.push("1");
// PACKED_ELEMENTS

// Creating a gap → makes it HOLEY
arrTwo[11] = 10;
// HOLEY_PACKED_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);

/*
    Accessing arrTwo[9]:

    - It is NOT very "costly" in a dramatic sense,
      but it is slower than dense access.

    - Engine checks:
        1. Does index exist?
        2. If not, returns undefined

    - Prototype chain lookup is NOT typically involved
      unless properties actually exist on the prototype.
*/

console.log(arrTwo[9]); // undefined

/*
    PERFORMANCE ORDER (rough mental model):

    PACKED_SMI > PACKED_DOUBLE > PACKED_ELEMENTS
    HOLEY_SMI > HOLEY_DOUBLE > HOLEY_ELEMENTS

    Packed is always faster than holey.
*/

/*
    NOTE:
    Once downgraded (e.g., SMI → PACKED),
    engines usually do NOT upgrade it back.
*/

// ----------------- IMPORTANT -----------------

// ❌ This creates a HOLEY array immediately
const arrFour = new Array(3);
// HOLEY_SMI_ELEMENTS (empty slots, not actual values)

// Filling values does NOT make it packed again
arrFour[0] = "1"; // HOLEY_PACKED
arrFour[1] = "2";
arrFour[2] = "3";

/*
    Better approach:
*/

// ✅ This keeps array PACKED
const arrFive = [];
arrFive.push("1");
arrFive.push("2");
arrFive.push("3");

/*
    Loop note (correction):

    - It's NOT that forEach / for-of are always faster.
    - In many cases:
        for loop is fastest
        for-of is clean and optimized
        forEach has callback overhead

    Modern engines optimize all reasonably well,
    so choose based on readability first.
*/
