//this in JS

//this is determined in three ways 
    //In object method, this refer to the 
        //object that is executing the current function
    //In Regular method, this refer to the 
        //Global object 
    //In Arrow Function, this refer to the 
        //Context in which this code is defined 
         

// object expression
let car = {
    color:"blue",
    brand:"Audi",
    //object method call
    start:function(){
        //console.log(this)
    }
}
car.start()

//Regular Declarative Function 
function start(){
    //console.log(this)
}
start()

// Arrow function (=>)
//in Arrow function, this depends on two aspects 
// when the code is defined 
// context 

let listCars = ["Audi","BMW","TATA"]
let cars = {
    color:"blue",
    brand:"Audi",
    //object method call
    start:function(){
        /*console.log(this)
        setTimeout(()=>{
            console.log(this)
        },1000);*/
    }
}
cars.start()

let list = ["Audi","BMW","TATA"]
let car1 = {
    color:"blue",
    brand:"Audi",
    //object method call
    start:function(){
        /*let audiIndex = list.findIndex(
            (car1) => console.log(this)
            );*/
    }
}
cars.start()



//constructor function
function Car(color,brand){
    this.color=color;
    this.brand=brand;
    this.start=function(){
        //console.log(this)
    }
}
let car2 = new Car("blue","Bez")
//car2.start()


function Car(color,brand){
    this.color=color;
    this.brand=brand;
    this.start=()=>{
        console.log(this)
    }
}
let carB = new Car("blue","Bez")
//carB.start()

function Car(color,brand){
    this.color=color;
    this.brand=brand;
    this.start=()=>{
        setTimeout(()=>{
            console.log(this)
        },1000)
    }
}
let cart = new Car("blue","Tata")
cart.start()