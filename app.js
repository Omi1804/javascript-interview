//For Each loop
const coding = ["js", "ruby", "cpp", "java", "python"];

//forEach is a higher order function
coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  //   console.log(item);
}

coding.forEach(printMe); //--> we can also give reference to the function which we want to be executed on each item

//forEach also as more inbuilt parameters
coding.forEach((item, index) => {
  //   console.log(item, index);
});

//array of objects
const mycoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "C with Classes",
    languageFileName: "C++",
  },
  {
    languageName: "typescript",
    languageFileName: "ts",
  },
  {
    languageName: "Hypertext markup language",
    languageFileName: "html",
  },
];

//but forEch doesn't return anything
mycoding.forEach((item) => {
  console.log(item.languageFileName, item.languageName);
});

// to make our items returns we use map,filter and others
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter returns part of the array based on certain conditions
const newNums = myNums.filter((nums) => {
  return nums > 4;
});
//whatever condition holds true will gets returned

//this filter funciton can also be impolemented through forEach function
console.log(newNums);

//map --> this returns the value
const newNum = myNums.map((num) => {
  return num + 10;
});

// console.log(newNum);

//we can also do chainging in map
const newN = myNums.map((num) => num * 10).map((num) => num + 1);

console.log(newN);

//Array.reduce
const mytotal = myNums.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 0);

//what happens here is on first iteration accumulator takes values which we mention as (, 0) i.e., in this situatino 0
//then it sums 0 + currentValue(1) = 1 now accumulator takes this as its value , in second iterations accumator has value of 1 and currentValue 2
//then 1 + 2 = 3 , accumulator has value of 3 and so on

//it is useful in finalizing the total price of the shopping cart

console.log("finalvalue ", mytotal);
