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
});
