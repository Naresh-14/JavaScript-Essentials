//Creating Multiple Objects
    //using Object Literals
    //using Factory function
    //using Constructor Function 
    // usiing Js Classes

//using Object Literals
let car = {
    color:"blue",
    brand:"Audi",
    start: function() {
        console.log("Started");
    }
};
//console.log(car.brand)

let car2 = {
    color:"red",
    brand:"Tata",
    start: function() {
        console.log("Started");
    }
};
//console.log(car.brand)

let car3 = {
    color:"green",
    brand:"BMW",
    start: function() {
        console.log("Started");
    }
};
//console.log(car.brand)


//using Factory function
//A Factory function is any function that return  a new Objects for every function call 

//function name should follow camelCase naming Convention
function createCar(color,brand){
    return {
        color:color,
        brand:brand,
        start: function(){
            console.log("Started");
        }
    };
}
let carone = createCar("blue","Audi");
let cartwo = createCar("red","Tata");
let carthree = createCar("green","BMW");
//console.log(carone)
//console.log(cartwo)
//console.log(carthree)



//Shorthand Notations
function createCar(color,brand){
    return {
        color,
        brand,
        start: function(){
            console.log("Started");
        }
    };
}
let caron = createCar("blue","Audi");
let cartw = createCar("red","Tata");
let carthre = createCar("green","BMW");
console.log(caron);
console.log(cartw);
console.log(carthre);