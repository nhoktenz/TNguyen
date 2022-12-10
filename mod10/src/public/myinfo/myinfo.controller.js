(function () {
  "use strict";

  angular.module("public").controller("MyInfoController", MyInfoController);

  MyInfoController.$inject = ["MenuService", "info"];
  function MyInfoController(MenuService, info) {
    var $ctrl = this;

    if (info) {
      console.log(info);
      $ctrl.info = info;
      MenuService.getMenuItem(info.favorite)
        .then(function (response) {
          console.log(response);
          console.log(response.short_name);
          var short_name_array = response.short_name.split(/([0-9]+)/);
          var category_short_name = short_name_array[0];
          var category_num = parseInt(short_name_array[1]) - 1;
          console.log(short_name_array);
          console.log(category_short_name);
          console.log(category_num);
          $ctrl.menuItem = response;
          $ctrl.menuItem.category_short_name = category_short_name;
          $ctrl.menuItem.short_name = short_name;
          $ctrl.description = response.description;
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  }
})();
