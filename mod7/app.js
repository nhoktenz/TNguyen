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

  AlreadyBoughtController.$inject = [
    "ShoppingListCheckOffService",
    "customPriceFilter",
  ];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    boughtList.total = function () {
      var price = 0;
      return price;
    };
  }

  function CustomPriceFilterFactory() {
    return function (input, pricePerItem, quantity) {
      input = input || "";
      console.log(input);
      console.log(pricePerItem);
      console.log(quantity);
      input = pricePerItem * quantity;
      console.log(input);
      return "$$$" + input;
    };
  }
  function ShoppingListCheckOffService() {
    var service = this;

    //List of shopping items
    var toBuyItems = [
      { name: "cookie(s)", quantity: 10, pricePerItem: 1 },
      { name: "can(s) of cocacola", quantity: 5, pricePerItem: 2 },
      { name: "bottle(s) of energy-drinks", quantity: 3, pricePerItem: 2.5 },
      { name: "bag(s) of snacks", quantity: 2, pricePerItem: 2 },
      { name: "bag(s) of noodle", quantity: 4, pricePerItem: 3 },
    ];

    var boughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.buyItem = function (itemIndex) {
      //   var name = toBuyItems[itemIndex].name;
      //   var pricePerItem = toBuyItems[itemIndex].pricePerItem;
      //   var quantity = toBuyItems[itemIndex].quantity;
      //   var totalPrice = pricePerItem * quantity;
      //   var newItem = {
      //     name: name,
      //     quantity: quantity,
      //     pricePerItem: pricePerItem,
      //   };
      //   console.log(newItem);
      boughtItems.push(toBuyItems[itemIndex]);
      //boughtItems.push(newItem);
      toBuyItems.splice(itemIndex, 1);
      console.log(boughtItems);
      console.log(toBuyItems);
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
})();
