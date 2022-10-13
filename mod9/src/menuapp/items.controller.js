(function () {
  "use strict";

  angular
    .module("MenuApp")
    .controller("ItemsListController", ItemsListController);

  ItemsListController.$inject = ["MenuDataService", "items"];
  function ItemsListController(MenuDataService, items) {
    var ctrl = this;

    ctrl.list = items;
  }
})();
