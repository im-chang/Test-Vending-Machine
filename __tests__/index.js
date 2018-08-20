const VendingMachine = require("../lib/vendingMachine");

const vendingMachine = new VendingMachine();

describe("Vending Machine", () => {
  describe("when checking status of stock in inventory", () => {
    it("should return stock of the inventory", () => {
      expect(vendingMachine.getStock()).toEqual({
        Pepsi: { count: 8 },
        Coke: { count: 13 },
        "7-Up": { count: 3 },
        "Mountain-Dew": { count: 20 }
      });
    });
  });

  describe("Vending Machine", () => {
    describe("when checking types of coins and the values the machine accepts", () => {
      it("should return all acceptable coins and their values", () => {
        expect(vendingMachine.getCoins()).toEqual({
          Toonie: { value: 2 },
          Loonie: { value: 1 },
          Quarter: { value: 0.25 },
          Dime: { value: 0.1 },
          Nickel: { value: 0.05 }
        });
      });
    });
  });
});
