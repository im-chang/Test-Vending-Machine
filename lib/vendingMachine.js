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

    this.coins = [
      {
        name: "Toonie",
        value: 2.0
      },
      {
        name: "Loonie",
        value: 1.0
      },
      {
        name: "Quarter",
        value: 0.25
      },
      {
        name: "Dime",
        value: 0.1
      },
      {
        name: "Nickel",
        value: 0.05
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
    console.log(stock);
    return stock;
  }

  getCoins() {
    let i = 0;
    let coinsAccepted = {};
    for (i = 0; i < this.coins.length; i++) {
      let name = this.coins[i].name;
      coinsAccepted[name] = { value: this.coins[i].value };
    }
    console.log(coinsAccepted);
  }
}

module.exports = VendingMachine;
