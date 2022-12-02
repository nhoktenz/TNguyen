(function () {
  "use strict";

  angular
    .module("data")
    .service("MenuDataService", MenuDataService)
    .constant(
      "ApiBasePath",
      " https://coursera-jhu-default-rtdb.firebaseio.com/"
    );

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
        // url: ApiBasePath + "/menu_items.json",
        // params: { category: categoryShortName },
        url: ApiBasePath + "/menu_items/" + categoryShortName + ".json",
      }).then(function (response) {
        console.log(response);
        return response.data;
      });
    };
  }
})();
