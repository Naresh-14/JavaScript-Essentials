function getProductOfInteger(...args) {
    let product = 1;
    for (let value of args){
        product *= value;
    }
    return  product
}


let integerArray = [1,2,3,4,5];
let result = getProductOfInteger(...integerArray);
console.log(result)