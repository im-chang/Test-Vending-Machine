const VendingMachine = require("../lib/vendingMachine");

const vendingMachine = new VendingMachine();

describe("Vending Machine", () => {
  describe("when checking status of stock in inventory", () => {
    it("should return stock of the inventory", () => {
      expect(vendingMachine.getStock()).toEqual({
        Pepsi: { count: 0 },
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

  describe("when a drink is out of stock", () => {
    it("should return drink is out of stock", () => {
      expect(vendingMachine.outOfStock("Pepsi")).toEqual(
        "Sorry this drink is out of stock"
      );
    });
  });

  describe("when inventory is refilled", () => {
    it("should return name of drink refilled and new quantity", () => {
      expect(vendingMachine.insertDrink("Pepsi", 7)).toEqual({
        name: "Pepsi",
        count: 7
      });
    });
  });

  describe("when coins is resupplied", () => {
    it("should return name of coin resupplied and new count", () => {
      expect(vendingMachine.resupplyChange("Loonie", 30)).toEqual({
        name: "Loonie",
        count: 39
      });
    });
  });

  describe("when bills are used", () => {
    it("should return sorry bills are not accepted", () => {
      expect(vendingMachine.censorCash(10)).toEqual(
        "Only Coins Accepted Sorry"
      );
    });
  });

  describe("when bills are used", () => {
    it("should return sorry bills are not accepted", () => {
      expect(vendingMachine.censorCash(2)).toEqual(2);
    });
  });

  describe("when user selects a drink", () => {
    it("should return drink is in stock", () => {
      expect(vendingMachine.buyDrink("Pepsi", 0)).toEqual([
        "Pepsi",
        1.5,
        "In Stock"
      ]);
    });
  });

  describe("when user puts in cash and makes a selection", () => {
    it("should return change", () => {
      expect(vendingMachine.dispenseChange("Pepsi", 1.85)).toEqual(["0.35"]);
    });
  });

  describe("when user puts in cash and makes a selection", () => {
    it("should return change", () => {
      expect(vendingMachine.dispenseChange("Pepsi", 1.35)).toEqual(
        "Please insert more money"
      );
    });
  });
});
