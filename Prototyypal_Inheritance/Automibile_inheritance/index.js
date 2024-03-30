function Vehicle(model,speed,fuelType,airBags){
    this.airBags = airBags;
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
function Car(airBags, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, airBags, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}
Car.prototype =Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.honk =function(){
    console.log("Honk!!!!!")
}
var myCar = new Car(6,"Sumo","upto-50","Petrol/Disel",4)