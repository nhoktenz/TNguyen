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

    buyList.items = ShoppingListCheckOffService.getToBuyItem();
    console.log(ShoppingListCheckOffService.getToBuyItem());
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    //List of shopping items
    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "cocacola", quantity: 5 },
      { name: "energy-drinks", quantity: 3 },
      { name: "snacks", quantity: 2 },
      { name: "bags of noodle", quantity: 4 },
    ];

    var boughtItems = [];

    service.getToBuyItem = function () {
      console.log(toBuyItems);
      return toBuyItems;
    };
  }
})();
