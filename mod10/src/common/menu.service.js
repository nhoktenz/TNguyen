(function () {
  "use strict";

  angular.module("common").service("MenuService", MenuService);

  MenuService.$inject = ["$http", "ApiPath"];
  function MenuService($http, ApiPath) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + "/categories.json").then(function (response) {
        return response.data;
      });
    };

    service.getMenuItems = function (category) {
      return $http
        .get(ApiPath + "/menu_items/" + category + ".json")
        .then(function (response) {
          return response.data;
        });
    };

    service.getMenuItem = function (shortName) {
      var myArray = shortName.split(/([0-9]+)/);
      console.log(myArray);
      var url =
        ApiPath +
        "/menu_items/" +
        myArray[0] +
        "/menu_items/" +
        myArray[1] +
        ".json";
      console.log(url);
      return $http.get(url).then(function (response) {
        return response.data;
      });
    };
  }
})();
