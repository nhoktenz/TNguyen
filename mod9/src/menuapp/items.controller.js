(function () {
  "use strict";

  angular
    .module("MenuApp")
    .controller("ItemsListController", ItemsListController);

  ItemsListController.$inject = ["MenuDataService", "items"];
  function ItemsListController(MenuDataService, items) {
    var ctrl = this;

    console.log(items);
    ctrl.menu_items = items.menu_items;
    ctrl.category = items.category;
  }
})();
