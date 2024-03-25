//singleton
const tinderUser = new Object(); // this is another way to create object but this declares a singleton object

tinderUser.id = "123abc";
tinderUser.name = "Omm";
tinderUser.isLoggedIn = true;

console.log(tinderUser);

//declaring object inside an object
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    firstName: "Omm",
    LastName: "Nigam",
  },
};
console.log(regularUser.fullname.firstName);

//merging objects together
const obj1 = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" };
const obj2 = { 6: "f", 7: "g", 8: "h", 9: "i", 10: "j" };

//const obj3 = { obj1, obj2 }; //by doing this we just put objects inside the object

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
