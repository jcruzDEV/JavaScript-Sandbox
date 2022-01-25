console.log('Hello, this is a JavaScript playground.');

/* 
window.addEventListener("load", function () {
    this.alert("Page is loaded and ready to go!");
}); 
*/

//forecast object
let forecast = {
    high: 30,
    low: 23,
    winds: "light",
    precipitation: "no",
    display : function () {return `The forecast for today is a high of ${this.high} and a low of ${this.low} with ${this.winds} wind and ${this.precipitation} precipitation.`;}
}

console.log(forecast.display());

/*
Constructors are functions that create new objects. They define properties and 
behaviors that will belong to the new object. Think of them as a blueprint for 
the creation of new objects.
*/ 
function Forecast() {
    this.high = 45;
    this.low = 22;
    this.winds = "high";
    this.precipitation = "light";
}
let today = new Forecast();
console.log(today.high);

function Car(manufacturer, type) {
    this.manufacturer = manufacturer;
    this.type = type;
}
Car.prototype.wheels = 4;

let dodgeViper = new Car("Dodge", "Viper");

//instanceof allows you to compare an object to a constructor
console.log(dodgeViper instanceof Car);

let plymouthBarracuda = new Car("Plymouth", "Barracuda");
let ownProp = [];
for(let prop in plymouthBarracuda)
{
    if(plymouthBarracuda.hasOwnProperty(prop))
    {
        ownProp.push(prop); //wheels will not be here because it's not an own property
    }
}
console.log(ownProp);
console.log(plymouthBarracuda.wheels);

Car.prototype = {  //setting prototype object so wheels was missing since it was overwritten/changed
    wheels: 4,
    doors: 2,
    gas: "unleaded",
    start: function() {console.log("Vroom vroom!")}
};

let mLancer = new Car("Mitsubishi", "Lancer");

console.log(mLancer);
console.log(mLancer.wheels);
mLancer.start();

console.log(Car.prototype.isPrototypeOf(mLancer)); //true
console.log(mLancer instanceof Car); //true 
console.log(mLancer instanceof Object); //true because we changed the constructor by assigning the prototype properties
console.log(mLancer.constructor === Car); //false
console.log(mLancer.constructor === Object)  //true

function Vehicle () {};
Vehicle.prototype = {
    ignition: function() {console.log("Rumble rumble vroom");},
    reverse: function() {console.log("Beep beep beep!");}
};

let suv = Object.create(Vehicle.prototype);
let truck = Object.create(Vehicle.prototype);

suv.prototype.constructor = Car;
truck.prototype.constructor = Car;

suv.prototype.trunk = function () {
    console.log("I have a hatchback.");
};