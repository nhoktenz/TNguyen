(function () {
  "use strict";

  angular
    .module("MenuApp")
    .controller("ItemsListController", ItemsListController);

  ItemsListController.$inject = ["items"];
  function ItemsListController(items) {
    var itm = this;

    console.log(items);
    itm.menu_items = items.menu_items;
    itm.category = items.category;
  }
})();
