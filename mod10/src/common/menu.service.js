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
      var category_short_name = myArray[0];
      var category_num = parseInt(myArray[1]) - 1;
      console.log(myArray);
      console.log(category_short_name);
      console.log(category_num);
      var url =
        ApiPath +
        "/menu_items/" +
        category_short_name +
        "/menu_items/" +
        category_num +
        ".json";
      console.log(url);
      return $http.get(url).then(function (response) {
        return response.data;
      });
    };
  }
})();
