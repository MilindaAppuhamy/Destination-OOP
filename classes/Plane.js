const Person = require("./Person");

class Plane {
  constructor(company, destination, origin) {
    this.company = company;
    this.destination = destination;
    this.origin = origin;
    this.passengers = [];
  }

  getPassengers() {
    return this.passengers;
  }
  addPassenger(passenger) {
    if (passenger instanceof Person) {
      this.passengers.push(passenger);
    } else {
      throw new Error("passenger must be an instance of Person");
    }
  }
}

module.exports = Plane;
