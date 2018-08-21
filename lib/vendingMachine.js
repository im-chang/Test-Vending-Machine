class VendingMachine {
  constructor(inventory) {
    this.inventory = [
      {
        name: "Pepsi",
        count: 0,
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
        value: 2.0,
        count: 5
      },
      {
        name: "Loonie",
        value: 1.0,
        count: 9
      },
      {
        name: "Quarter",
        value: 0.25,
        count: 25
      },
      {
        name: "Dime",
        value: 0.1,
        count: 50
      },
      {
        name: "Nickel",
        value: 0.05,
        count: 59
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
    return coinsAccepted;
  }

  outOfStock() {
    let i = 0;
    let stock = {};
    for (i = 0; i < this.inventory.length; i++) {
      let count = this.inventory[i].count;
      if (count === 0) {
        return "Sorry this drink is out of stock";
      }
    }
  }

  insertDrink(drink, quantity) {
    let currentCount = 0;
    let newCount = {};
    let result = this.inventory.find(item => item.name === drink);
    currentCount = result.count;
    result.count = currentCount + quantity;
    newCount.name = result.name;
    newCount.count = result.count;
    return newCount;
  }

  resupplyChange(change, quantity) {
    let currentCount = 0;
    let newCount = {};
    let result = this.coins.find(coin => coin.name === change);
    currentCount = result.count;
    result.count = currentCount + quantity;
    newCount.name = result.name;
    newCount.count = result.count;
    console.log(newCount);
    return newCount;
  }
}

module.exports = VendingMachine;
