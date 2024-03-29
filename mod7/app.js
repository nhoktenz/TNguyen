(function () {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService)
    .filter("customPrice", CustomPriceFilterFactory);

  ToBuyController.$inject = [
    "ShoppingListCheckOffService",
    "customPriceFilter",
  ];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;

    buyList.items = ShoppingListCheckOffService.getToBuyItems();

    buyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
      if (buyList.items.length === 0) {
        buyList.message = "Everything is bought!";
      }
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    boughtList.total = ShoppingListCheckOffService.getBoughtItemsTotalPrice();
  }

  function CustomPriceFilterFactory() {
    return function (input, pricePerItem, quantity) {
      input = input || "";
      input = pricePerItem * quantity;
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      input = formatter.format(input);
      return "$$" + input;
    };
  }
  function ShoppingListCheckOffService() {
    var service = this;

    //List of shopping items
    var toBuyItems = [
      { name: "bag(s) of cookie", quantity: 10, pricePerItem: 1.0 },
      { name: "bottle(s) of milk", quantity: 5, pricePerItem: 3.0 },
      { name: "bottle(s) of juice", quantity: 3, pricePerItem: 2.5 },
      { name: "bag(s) of snacks", quantity: 2, pricePerItem: 4.0 },
      { name: "bag(s) of bread", quantity: 4, pricePerItem: 2.0 },
    ];

    var boughtItems = [];
    var totalPriceList = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.buyItem = function (itemIndex) {
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
      var total = boughtItems.reduce(
        (n, { quantity, pricePerItem }) => n + quantity * pricePerItem,
        0
      );
      totalPriceList.push(total);
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.getBoughtItemsTotalPrice = function () {
      return totalPriceList;
    };
  }
})();
