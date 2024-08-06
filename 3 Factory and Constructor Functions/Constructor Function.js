//Constructor Function 
//A regular function that returns a new object on calling with the new operator 
// The created new object is called an instance

// Note : Function name should follow PascalCase naming Convention 

function Car(color,brand){
    this.color=color;
    this.brand=brand;
    this.start=function(){
        console.log("Started");
    };
}
//car1 is instance
// car1.start() is instance method 
// car1.color, car1.brand are instance properties
let car1 = new Car("Blue","BMW");
let car2 = new Car("red","Audi");
let car3 = new Car("green","Tata");
//console.log(car1);
//console.log(car2);
//console.log(car3);

// Factory functions
    //follows camelCase notation
    //no need of new operator for function calling 
    //Explicitly need to return the object 

//Constructor functions
    //follows PascalCase notation
    // need new operator for functions calling
    //created object returns implicitly


//functions objects 
    // simple to objects,functions also have properties and methods

//Default functions properties and methods

// properties           Methods 
    //name               apply()
    //length             bind()
    //Constructor        call()
    //prototype          tostring()


function Cars(color,brand){
    this.color=color;
    this.brand=brand;
    this.start=function(){
        console.log("Started");
    };
}
let cars = new Cars("green","BMW");
//console.log(Cars.name)
//console.log(Cars.length)
//console.log(cars.constructor)

//Built-in constructor functions
    //function Date()
    //function Error()
    //function promise()
    //function object()
    //function string()
    //function Number() 
    
let now = new Date()
console.log(now)
console.log(typeof(now))

let nows = new Date(2001,)
console.log(nows.getFullYear())

let err = new Error();
//console.log(err)