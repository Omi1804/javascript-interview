// Object Oriented Javascript

//Javascript and classes
//Originally js does not have the concept of classes but ES6 introduced it in js. JavaScript is primarily a prototype-based language, and its classes are primaritly syntactic sugar over existing prototype-based inheritance mechanisms.

/*

Object - Collection of properties and methods

object literal - means literally object (no other meaning)

Parts of OOPs:
- Contructor functions
- Prototypes
- Classes
- Instances (new , this)


4 pillars of Oops :
Abstraction - hiding unnecessary details
Encapsulation - wrapping the code for reusibiliity
Inheritance - 
Polymorphism - One method can behave in multiple ways

*/

//this is object literal
const user = {
  username: "om",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got all the details of user HAHAHAH");
    //we use this keyword to define the current context
    //here we have to tell method that it has to print username of himself only so we have to give the context
    console.log(`${this.username}`);

    //you can also get all details of this
    console.log(this);
    return "HEllo";
  },
};

// console.log(user.getUserDetails());

//if we console.log(this) in browser then it gives me the broswer's global object which is window object (global context)

// now if we want user2 object then also we need to define each and every field once more
//so to save our time we create constructor function

function User(username, loginCount, isLoggedIN) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIN = isLoggedIN;

  return this; //returning this will return all the properties of current function
}

// const userOne = User("Om", 8, true);
// console.log(userOne); // in this we can see that we get all the properties of the funciton

// const userTwo = User("Hitest", 10, false);
// console.log(userOne); //Here we can see that inspite of logging userOne is it giving the values of userTwo bcs userTwo has overwritten all the datas.

//now we use new keyword with it

const userOne = new User("Om", 8, true);
console.log(userOne); // in this we can see that we get all the properties of the funciton

const userTwo = new User("Hitest", 10, false);
console.log(userOne);

//here we can see that using new keyword will make function's entire new instance
