class VendingMachine {
  constructor(inventory) {
    this.inventory = [
      {
        name: "Pepsi",
        count: 8,
        cost: 1.5
      },
      {
        name: "Coke",
        count: 13,
        cost: 1.5
      },
      {
        name: "7-Up",
        count: 3,
        cost: 1.5
      },
      {
        name: "Mountain-Dew",
        count: 20,
        cost: 1.5
      }
    ];
  }

  getStock() {
    let i = 0;
    let stock = {};
    for (i = 0; i < this.inventory.length; i++) {
      let name = this.inventory[i].name;
      stock[name] = { count: this.inventory[i].count };
    }
    return stock;
  }
}

module.exports = VendingMachine;
