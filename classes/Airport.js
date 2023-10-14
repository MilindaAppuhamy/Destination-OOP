const Plane = require("./Plane");

class Airport {
  constructor(name) {
    this.name = name;
    this.planes = [];
  }
  static airportCode = "JFK";

  getPlanes() {
    return this.planes;
  }

  addPlane(plane) {
    if (plane instanceof Plane) {
      this.planes.push(plane);
    } else {
      throw new Error("plane must be an instance of Plane");
    }
  }
}

module.exports = Airport;
