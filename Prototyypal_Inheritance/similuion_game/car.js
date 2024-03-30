function Vehicle(brand,model,speed,fuelType){
    this.airBags = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType =fuelType
}
Vehicle.prototype.accelerate = function(){
this.speed += 10;
console.log(this.airBags + " " + this.model + " is accelerating. Current speed: " + this.speed)
}

Vehicle.prototype.brake = function() {
    this.speed -= 10;
    console.log(this.airBags + " " + this.model + " is braking. Current speed: " + this.speed);
}
  
Vehicle.prototype.refuel = function() {
    console.log(this.airBags + " " + this.model + " is refueling.");
}
function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}
Car.prototype =Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.honk =function(){
    console.log("Honk!!!!!")
}
function Airplane(brand,model,speed,fuelType,numberOFEngines,hasLandingGears){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOFEngines = numberOFEngines;
    this.hasLandingGears = hasLandingGears;
}
Airplane.prototype = Object.create(Vehicle.prototype);
Airplane.prototype.constructor = Airplane;
Airplane.prototype.takeOff = function() {
    console.log(this.brand + " " + this.model + " is taking off.");
  };

 var myCar = new Car("Kia","Sonet",60,"Petrol",4);
 var myAirplane = new Airplane("HAL","LCA-Tejas",2340,"Jet-Fuel",1,true)

 myCar.accelerate(); 
myCar.brake();      
myCar.refuel();     
myCar.honk();      

myAirplane.accelerate(); 
myAirplane.brake();      
myAirplane.refuel();     
myAirplane.takeOff();   
  




// const sayhi=()=>"hi"
// console.log(sayHi())
