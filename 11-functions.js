//when we dont know how many parameters can come to an function then we use spread operator like this...
//this can take any number of arguments
//funcitons me jo pass hote h wo paramenters hote h... aur funtions call krte time jo values pass krte h unhe arguments khte h
function calculateCartPrice(...nums) {
  return nums;
}
// console.log(calculateCartPrice(200, 300, 400));

const user = {
  username: "om",
  price: 122,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject(user);
