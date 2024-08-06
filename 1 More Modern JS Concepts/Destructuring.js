//Destructuring arrays & Objects with rest parameter syntax 

//Destructuring arrays

let [a,b,c] = [1,2,4];
//console.log(a)
//console.log(b)
//console.log(c)

let [d,...rest] = [1,2,4,5,6,7];
//console.log(d)
//console.log(rest)

//Destructuring objects 
let {firstname,...rests} = {firstname:"Naresh",lastname:"Na",age:22,city:"Hyd"}
//console.log(firstname)
//console.log(rests)


//Default parameters
//its allows us to give Default values to function parameters

function mult(a=5,b=4){
    return  a*b;
}
let results = mult()
console.log(results)