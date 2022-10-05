(function () {
  "use strict";

  angular
    .module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";

    menu.searchMenuItem = function (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  }

  MenuSearchService.$inject = ["$http", "ApiBasePath"];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
      }).then(function (response) {
        console.log(response);
        var foundItems = [];
        for (var i = 0; i < response.data["menu_items"].length; i++) {
          if (
            searchTerm.length > 0 &&
            response.data["menu_items"][i]["description"]
              .toLowerCase()
              .indexOf(searchTerm) !== -1
          ) {
            foundItems.push(response.data["menu_items"][i]);
          }
        }
        return foundItems;
      });
    };
  }
})();
