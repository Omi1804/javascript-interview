// stack (used in Primitive types) , Heap (Non-Primitive)
//whatever the value is stored in stack we get's its copy and whatever the value is stored in head we get's the reference of the original variable

let name = "Om Nigam"; //this goes to stack
let anotherName = name; //here the copy of the name is stored not the actual name

anotherName = "chaiaurcode";

console.log(anotherName);
console.log(name);
// and hence the another name only changes not the acutal name

//as this is non premitive datatype hence it shares the reference
let user = {
  email: "user@google.com",
  upi: "user@upi.com",
};

let user2 = user;

user2.email = "user1@google.com";

console.log(user2);
console.log(user);
//here you can see both the values inside the user and user2 both changed
