const myArr = [];

/*
    There are two types of arrays:
     holey arrays and continuous arrays. 
    
    These arrays can contain three types of elements: 
    SMI (Small Integer), Packed Element, and Double.

    so what happens is js engine V8 checks which types of array is there i.e, firstly is the arrya is continuous or has holes in it(empty elements in the middle or full empty) then it further check whether the array is SMI, packed element or double(has string, float etc types of elements) according to all these permutaions the v8 will optimize the array



    1. **Holey Array**: 
    A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

    2. **Continuous Array**: A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

    In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.

*/

const arrTwo = [1, 2, 3, 4, 5];
// THis is PACKED_SMI_ELEMENTS these types of arrays are most optimized arrays but can only contains numbers in it

//if I
arrTwo.push(1.9);
// now the array becomes PACKED_DOUBLE_ELEMENTS

//then if i
arrTwo.push("1");
// then the array becomes PACKED_ELEMENTS only

//the optimization will keep on chaging as we change the types of the arrays

//then
arrTwo[11] = 10;
//now i have created a gap in the array so it becomes HOLEY_ARRAY

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]); // this will return undefined but this is very costly operation for the system as
//it is not out of bound operation (the index is within the length)
//then js checks hasOwnProperty(arrTwo,9) that is it has any property defined named 9
//then as js has prototypial nature hnece it keeps on digging untile the very rock bottom

//that why holes are very expensive in the array

//Optimized levels
//SMI > DOUBLE > PACKED  (all in continuous elements)
//(in holes) H_SMI > H_DOUBLE > H_PACKED

//packed means has every types of the elements like nubers, strings, floats etc

//NOte: once the array is downgraded like from SMI to PACKED only then it can never be upgraded even if you delete all the unwanted elements

//-----------------IMP--------------

//see how by just changing the way we write the array can have so much impact

const arrFour = new Array(3);
// by creating this it created an array of 3 elements but emptied hence it is out of the box HOLEY_ARRAY but SMI for now

arrFour[0] = "1"; //now this becomes HOLEY_PACKED
arrFour[1] = "2";
arrFour[2] = "3";

//we can't stop it to become packed but we can stop it form becoming emptied or Holey
//INSTEAD OF DOING THIS WE CAN

const arrFive = []; //this makes this array as Continuous
arrFive.push("1"); //CONTINUOUS_PACKED
arrFive.push("2");
arrFive.push("3");

//just by writing like this we have optimized the array so much
//as holey are very bad in the array types

//By keeping these optimizatinos in mind Browsers always recommends to use for, for-of, forEach for there respective use instead of always using for loop as browsers were designed to make optimizations if these loops are in use
