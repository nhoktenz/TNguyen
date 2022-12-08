(function () {
  "use strict";

  angular.module("public").controller("SignupController", SignupController);

  SignUpController.$inject = ["MenuService", "MyInfoService"];
  function SignUpController(MenuService, MyInfoService) {
    var $ctrl = this;
    $ctrl.info = {};

    $ctrl.submit = function () {
      MenuService.getMenuItem($ctrl.info.favorite)
        .then(function (response) {
          $ctrl.invalidFavorite = false;
          $ctrl.submitted = true;
          MyInfoService.setInfo($ctrl.info);
        })
        .catch(function () {
          $ctrl.invalidFavorite = true;
        });
    };

    $ctrl.validateFavorite = function () {
      console.log($ctrl.info.favorite);
      MenuService.getMenuItem($ctrl.info.favorite)
        .then(function () {
          $ctrl.invalidFavorite = false;
        })
        .catch(function () {
          $ctrl.invalidFavorite = true;
        });
    };
  }
})();
