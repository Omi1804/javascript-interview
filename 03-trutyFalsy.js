//js me kuch bhi likho wo mainly do me se kuch ek prakaar ko belong krta hai
//truthy values or falsey values

//falsey values are = 0 undefined false NaN null document.all

//rest all the values are truthy values

// if(7) -> truthy value
// if(-1) -> truthy value bsc not in the list of falsey values

typeof window; // object
typeof document; // object
typeof document.all; // undefined

if (document.all) {
  console.log("I am truthy");
} else {
  console.log("I am falsey");
}

//output -> I am falsey

//document.all is a falsey value but its type is undefined

//document.all is a special object in JavaScript that represents all the elements in the HTML document. It is considered a falsey value because it behaves like undefined when evaluated in a boolean context, even though its type is "undefined". This is a quirk of JavaScript and can lead to confusion, but it is important to remember that document.all is not truly undefined, but rather a special case that behaves as falsey.
