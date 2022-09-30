(function () {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;

    buyList.items = ShoppingListCheckOffService.getToBuyItems();

    buyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
      console.log(buyList.items.length);
      if (buyList.items.length === 0) {
        buyList.message = "Everything is bought!";
      }
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    //List of shopping items
    var toBuyItems = [
      { name: "cookies", quantity: 10, pricePerItem: 1 },
      { name: "can of cocacola", quantity: 5, pricePerItem: 2 },
      { name: "bottles of energy-drinks", quantity: 3, pricePerItem: 2.5 },
      { name: "bags of snacks", quantity: 2, pricePerItem: 2 },
      { name: "bags of noodle", quantity: 4, pricePerItem: 3 },
    ];

    var boughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.buyItem = function (itemIndex) {
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
      if (boughtItems.length > 0) {
        isEmpty = "";
      }
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
})();
