const Plane = require("../../classes/Plane");
const Airport = require("../../classes/Airport");

describe("Airport class", () => {
  it("should create instances properly", () => {
    const airport = new Airport("Dashport");
    const result = airport instanceof Airport;
    expect(result).toBeTruthy();
  });

  it("should assign the name and planes properly", () => {
    const airport = new Airport("Dashport");
    expect(airport.name).toBe("Dashport");
    expect(airport.planes).toEqual([]);
  });

  it("should set the correct airport code", () => {
    expect(Airport.airportCode).toEqual("JFK");
  });

  it("addPlane should update the planes array properly", () => {
    const airport = new Airport("Dashport");
    const plane1 = new Plane("Dash-Airlines", "Italy");
    const plane2 = new Plane("British-Airlines", "USA");
    airport.addPlane(plane1);
    airport.addPlane(plane2);

    expect(airport.planes.length).toBe(2);
    expect(airport.planes[0]).toEqual({
      company: "Dash-Airlines",
      destination: "Italy",
      passengers: [],
      origin: "JFK",
    });
    expect(airport.planes[1]).toEqual({
      company: "British-Airlines",
      destination: "USA",
      passengers: [],
      origin: "JFK",
    });
  });

  it("addPlane throws error if arg is not an instance of Plane", () => {
    const airport = new Airport("Dashport");
    const plane = { company: "Dash-Airlines" };
    expect(() => airport.addPlane(plane)).toThrow(
      "plane must be an instance of Plane"
    );
  });
});
