const Bag = require("./Bag");

class Person {
  constructor(name, destination) {
    this.name = name;
    this.destination = destination;
    this.bags = [];
  }

  getBags() {
    return this.bags;
  }

  addBag(bag) {
    if (bag instanceof Bag) {
      this.bags.push(bag);
    } else {
      throw new Error("bag must be an instance of the Bag");
    }
  }
}

module.exports = Person;
