// Primitives & Objects 
//All the Primitives types values are immutable
    // num,string,boolean,Symbol,undefined...

//All the objects are mutable 
    //object,array,function
    


//Primitives types  
let x = 5;
let y = x;
y=10
//console.log(x)
//console.log(y)

let a={value:5}
let b=a;
let c={value : 20}
b.value=10;
//console.log(a)
//console.log(b)
b=c
//console.log(a)
//console.log(b);


//using let 
//initization is not mandatory
//variables can be reassigned

let n = 3;
n=4 
console.log(n)
n=6 
console.log(n)

//using const 
// once a value is initization then is cann't reassigned

const r = 4;
r = 5 
console.log(r)