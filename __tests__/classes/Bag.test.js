const Bag = require("../../classes/Bag");

describe("Bag class", () => {
  it("should create instances properly", () => {
    const bag = new Bag(10, 2);
    const result = bag instanceof Bag;
    expect(result).toBeTruthy();
  });

  it("should assign the weight and id properly", () => {
    const bag = new Bag(10, 2);
    expect(bag.weight).toBe(10);
    expect(bag.id).toBe(2);
  });

  it("getOwner should return the owner", () => {
    const bag = new Bag(10, 2);
    const result = bag.getOwner();
    expect(result).toBeNull();
  });

  it("assignOwner should update the owner", () => {
    const bag = new Bag(10, 2);
    bag.assignOwner("Dash");
    const result = bag.getOwner();
    expect(result).toBe("Dash");
  });
});
