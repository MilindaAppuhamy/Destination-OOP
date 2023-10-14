const Person = require("../../classes/Person");
const Plane = require("../../classes/Plane");
const Airport = require("../../classes/Airport");

describe("Plane class", () => {
  it("should create instances properly", () => {
    const plane = new Plane("Dash-Airlines", "Italy", Airport.airportCode);
    const result = plane instanceof Plane;
    expect(result).toBeTruthy();
  });

  it("should assign the origin, company and destination properly", () => {
    const plane = new Plane("Dash-Airlines", "Italy", Airport.airportCode);
    expect(plane.company).toBe("Dash-Airlines");
    expect(plane.destination).toBe("Italy");
    expect(plane.origin).toBe("JFK");
  });

  it("passengers should initialize as an empty array", () => {
    const plane = new Plane("Dash-Airlines", "Italy", Airport.airportCode);
    expect(plane.passengers).toEqual([]);
  });

  it("addPassenger should update the passengers array properly", () => {
    const plane = new Plane("Dash-Airlines", "Italy", Airport.airportCode);
    const p1 = new Person("Sam", "Italy");
    const p2 = new Person("John", "Spain");
    plane.addPassenger(p1);
    plane.addPassenger(p2);

    expect(plane.passengers.length).toBe(2);
    expect(plane.passengers[0]).toEqual({
      name: "Sam",
      destination: "Italy",
      bags: [],
    });
    expect(plane.passengers[1]).toEqual({
      name: "John",
      destination: "Spain",
      bags: [],
    });
  });

  it("addPassenger throws error if arg is not an instance of Person", () => {
    const plane = new Plane("Dash-Airlines", "Italy", Airport.airportCode);
    const person = { name: "Harry" };
    expect(() => plane.addPassenger(person)).toThrow(
      "passenger must be an instance of Person"
    );
  });

  it("getPassengers should return the correct passengers array", () => {
    const plane = new Plane("Dash-Airlines", "Italy", Airport.airportCode);
    const p = new Person("Sam", "Italy");
    plane.addPassenger(p);
    const result = plane.getPassengers();

    expect(result.length).toBe(1);
    expect(result).toEqual([{ name: "Sam", destination: "Italy", bags: [] }]);
  });
});
