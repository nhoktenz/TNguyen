(function () {
  "use strict";

  angular.module("public").controller("SignUpController", SignUpController);

  SignUpController.$inject = ["MenuService", "MyInfoService"];
  function SignUpController(MenuService, MyInfoService) {
    var $ctrl = this;
    $ctrl.info = {};
    console.log(MenuService);
    $ctrl.submit = function () {
      MenuService.getMenuItem($ctrl.info.favorite)
        .then(function (response) {
          console.log(response);
          $ctrl.invalidFavorite = false;
          $ctrl.submitted = true;
          MyInfoService.setInfo($ctrl.info);
        })
        .catch(function () {
          $ctrl.invalidFavorite = true;
          $ctrl.submitted = false;
        });
    };

    $ctrl.validateFavorite = function () {
      MenuService.getMenuItem($ctrl.info.favorite)
        .then(function (response) {
          console.log(response);
          if (response !== null) {
            $ctrl.invalidFavorite = false;
          } else {
            $ctrl.invalidFavorite = true;
          }
        })
        .catch(function (error) {
          console.log(error);
          $ctrl.invalidFavorite = true;
        });
    };
  }
})();
