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
  function AlreadyBoughtController(
    ShoppingListCheckOffService,
    customPriceFilter
  ) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function CustomPriceFilterFactory() {
    return function (quantity, pricePerItem) {
      var totalPrice = quantity * pricePerItem;
      return "$$$" + totalPrice;
    };
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
