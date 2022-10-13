(function () {
  "use strict";

  angular
    .module("data")
    .service("MenuDataService", MenuDataService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ["$http", "ApiBasePath"];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    // Get all categories
    service.getAllCategories = function () {
      return $http({
        method: "GET",
        url: ApiBasePath + "/categories.json",
      }).then(function (response) {
        console.log(response);
        return response.data;
      });
    };

    //Get all items from specific category
    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json?category=" + categoryShortName,
      }).then(function (response) {
        return response.data.menu_items;
      });
    };
  }
})();
