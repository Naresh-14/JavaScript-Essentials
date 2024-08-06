/* Spread Operator 
Spread operator is used to unpack iterable
(e.g an array) it into individual elements.*/

let arr1 = [2,3];
let arr2 = [1,...arr1,4];
//console.log(arr2);

//creating Copy 
let copy1 = [2,4];
let copy = [...copy1];
//console.log(copy);

//concatenation
let concatenation1 = [4,5];
let concatenation2 = [6,7];
let con = [...concatenation1,...concatenation2];
//console.log(con);

//Spread operator object 
let person = {
    name:"Naresh",
    age : 22,
    location:"Hyd"
};
let personDetails = {...person,role:"SD"};
//console.log(personDetails);

//concatenation 
let person1 = {name:"Naresh",age:20};
let location2 = {city:"Siddipet",pincode:502247};
let personDetails1 = {...person1,...location2};
//console.log(personDetails1);

//Spread Operator with Function Calls
//Spread Operator syntax can be used to pass an array of arguments to the function 

function add(a,b,c){
    return  a+b+c;
}
let number = [1,2,3];
//console.log(add(...number))

//extra values will be ignored if more args are passed than function parameters

function add1(a,b,c){
    return a+b+c;
};
let num = [1,2,4,5,6];
console.log(add(...num))