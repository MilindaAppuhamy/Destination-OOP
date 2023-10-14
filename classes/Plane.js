const Airport = require("./Airport");
const Person = require("./Person");

class Plane {
  constructor(company, destination) {
    this.company = company;
    this.destination = destination;
    this.origin = Airport.airportCode;
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
