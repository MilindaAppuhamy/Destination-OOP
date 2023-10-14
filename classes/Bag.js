class Bag {
  #owner;

  constructor(weight, id) {
    this.#owner = null;
    this.weight = weight;
    this.id = id;
  }

  getOwner() {
    return this.#owner;
  }

  assignOwner(owner) {
    this.#owner = owner;
  }
}

module.exports = Bag;
