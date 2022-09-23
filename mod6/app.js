(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.result = "";

    $scope.checkLunch = function () {
      var items = $scope.lunch.split(",").filter((s) => s.trim());
      var count = 0;
      for (var i = 0; i < items.length; i++) {
        count += 1;
      }

      if (count == 0) {
        $scope.result = "Please enter data first";
      } else if (count >= 1 && count <= 3) {
        $scope.result = "Enjoy!";
      } else {
        $scope.result = "Too much!";
      }
    };
  }
})();
