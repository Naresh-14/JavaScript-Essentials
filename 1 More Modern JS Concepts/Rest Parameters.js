//Rest Parameter
// with rest Parameter, we can pack multiple values into an array 

function  num(...args) {
    //console.log(args);
}
num(1,2,3);

function add(a,b,...args){
    //console.log(a)
    //console.log(b)
    //console.log(a+b)
    //console.log(args)
}
add(1,3,4,5,6)

// sum 
function sum(...args){
    let result = 0;
    for (let arg of args){
        result = result + arg;
    }
    //console.log(result)
}
sum(1,5);
sum(1,2,3,4,5,6,7,8)