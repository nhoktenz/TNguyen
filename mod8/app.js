(function () {
  "use strict";

  angular
    .module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com")
    .directive("foundItems", FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: "foundItems.html",
      scope: {
        found: "<",
        onRemove: "&",
      },
      controller: NarrowItDownController,
      controllerAs: "list",
      bindToController: true,
    };
    return ddo;
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    list.searchTerm = "";

    list.searchMenuItems = function (searchTerm) {
      list.found = [];
      if (list.searchTerm !== "") {
        var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
        promise.then(function (foundItems) {
          list.found = foundItems;
          if (list.found.length === 0) {
            list.message = "Nothing found.";
          } else {
            list.message = "";
          }
        });
      } else {
        list.message = "Please fill out the search box.";
      }
    };

    list.removeItem = function (index) {
      list.found.splice(index, 1);
      if (list.found.length === 0) {
        list.message =
          "You didn't want any of the found items - All items are removed";
      }
    };
  }

  MenuSearchService.$inject = ["$http", "ApiBasePath"];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json",
      }).then(function (response) {
        var foundItems = [];
        var menuItems = response.data.menu_items;

        for (var i = 0; i < menuItems.length; i++) {
          var item = menuItems[i];
          var itemDesc = item.description;
          if (itemDesc.search(searchTerm.toLowerCase()) != -1) {
            foundItems.push(item);
          }
        }
        console.log(foundItems);
        return foundItems;
      });
    };
  }
})();
