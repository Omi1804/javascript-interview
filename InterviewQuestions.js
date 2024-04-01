/*
1. Difference between if else and terniary operator...ifelse is a statement whereas terniary is a expression..like expression is something which can be evaluated to a single value and can be stored in a variable whereas in statement we cannot do such 
2. Parent div is flex with 2 childs both span if we give height and width to span does it work ? --> yes because as soon as we give a parent flex its child becomes flex items which are display block by default
3. If i put <Om></Om> in html does it work or give error ? ---> No, it will works as a inline element and does not gives the error
4. How to do shallow copy and deep copy in javascript ? --> in case of objects we do shallow copying as object.assign or through {...}spread operator and for deep copy we do JSON.parse and JSON.stringify
5. What are clousers
6. output:
    console.log(a); --> undefined
    console.log(b); ---> it will give error
    var a = b = 5;
    study on this why

7. output:
    var a = 5;
    console.log(a++); --> 5
    console.log(a); --> 6

8. output:
    console.log(1<2<3);
    console.log(3>2>1);

    here remember browser will run from left to right hence in first one -- 1 < 2  rerults in true then true < 3 --> true is treated as 1 and 1 < 3 gives true (finally)
    in second, 3 > 2 gives true then true > 1 results in false

9. const foo = () =>{
    console.log(this.name);
}
    foo.call({name: 'John'});

    this gives undefined now study why....refers to this keyword in arrow functions vs in normal functinos
    Arrow function doesn't have it's own this, it will take laxical "this" . This is the main difference between arrow function and normal function. Arrow function was not introduced because of it's simple syntax as some think. It's was introduced to provide above mentioned functionality.

    const foo = function(){
        console.log(this.name); --> John
        const bar = ()=>{
            console.log(this.name); --> John
        }
        bar();
    }
    foo.call({name: 'John'});

    //Now this will give outpout of John John because always remember that in arrow function this will take the scope of its parent function if there is no parent function then it will take global windows object

10. const user = {
    id : 123,
    name: "John Doe",
    age: 34,
    address:{
        city: "Mumbai",
        state: "Maharastra"
    }
    now do some changes in user object so that id property of user object cannot be changed i.e., make it freeze...-> there is a property called Object.defineProperties we use that here
    Object.defineProperties(user, {id: {writable: false}});
    now no one can change the id property of user object
}
 */
