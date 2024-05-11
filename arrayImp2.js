const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); //this way array as it is concatinate inside the array

//to really merge the array into another array we use -
// const all_heros = marvel_heros.concat(dc_heros); // this return new array
//const all_heros = [...marvel_heros, ...dc_heros]; //spread operator -> through this we spread the into its individual elements

const another_array = [1, 1, 1, 1, [1, 1, 1, 1, [1, 1, 1, 1, [1, 1, 1]]]];

//to make this array into single array
const flat_array = another_array.flat(Infinity);

//functions for creating array from non array structures
console.log(Array.isArray("OmNigam")); //determines whether its an array or not
console.log(Array.from("Om Nigam")); //converts string into arrya

//to sort the array alphabetically or by numerical order
marvel_heros.sort();
//for reverse sorting for numberical order
let arr = [1, 2, -1, 3, 1];
arr.sort((a, b) => b - a);
