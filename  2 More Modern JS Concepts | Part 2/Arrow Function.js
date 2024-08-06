//defining Function

// Function Declaration & Function Expression 
// Function()  & let add = Function()

//Arrow Function  `=>`
//An Arrow Function is a simple and concise syntax for defining Functions
//it is an alternative to Functions Expression

//syntax
// let add = Functions(a,b) & let add=(a,b)=>{}

let add = (a,b)=>{
    return a+b;
}
console.log(add(2,3))

let isEqual = (x,y)=> x===y;
console.log(isEqual(2,3))

let mult = (c,d)=>c*d;
console.log(mult(2,3))

//with one parameter 
// if there is only one parameter, then parentheses are not required 

let func = name => `Hello ${name}`
console.log(func("Naresh"))

let square = num => num*num
console.log(square(3))

// with No parameter 
// if there are no parameter, parentheses will be empty (but they should be present)

let sayHi = ()=>"Hello";
console.log(sayHi())

//Returning Object
let createUser = name => ({first:"Naresh"})
console.log(createUser())