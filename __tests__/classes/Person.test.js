const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");

describe("Person class", () => {
  it("should create instances properly", () => {
    const person = new Person("Dash", "Italy");
    const result = person instanceof Person;
    expect(result).toBeTruthy();
  });

  it("should assign the name and destination properly", () => {
    const person = new Person("Dash", "Italy");
    expect(person.name).toBe("Dash");
    expect(person.destination).toBe("Italy");
  });

  it("bags should initialize as an empty array", () => {
    const person = new Person("Dash", "Italy");
    expect(person.bags).toEqual([]);
  });

  it("addBags should update the bags array properly", () => {
    const person = new Person("Dash", "Italy");
    const bag1 = new Bag(30, 3);
    const bag2 = new Bag(20, 1);
    person.addBag(bag1);
    person.addBag(bag2);

    expect(person.bags.length).toBe(2);
    expect(person.bags[0]).toEqual({ weight: 30, id: 3 });
    expect(person.bags[1]).toEqual({ weight: 20, id: 1 });
  });

  it("addBags throws error if arg is not an instance of Bag", () => {
    const person = new Person("Dash", "Italy");
    const bag = { weight: 10 };
    expect(() => person.addBag(bag)).toThrow(
      "bag must be an instance of the Bag"
    );
  });

  it("getBags should return the bags array", () => {
    const person = new Person("Dash", "Italy");
    const bag = new Bag(30, 3);
    person.addBag(bag);
    const result = person.getBags();
    expect(result.length).toBe(1);
    expect(result).toEqual([{ weight: 30, id: 3 }]);
  });
});
