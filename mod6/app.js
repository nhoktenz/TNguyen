(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.result = "";
    $scope.color = "";
    $scope.borderColor = "";
    $scope.border = "";

    $scope.checkLunch = function () {
      var items = $scope.lunch.split(",").filter((s) => s.trim());
      var count = 0;
      for (var i = 0; i < items.length; i++) {
        count += 1;
      }

      if (count === 0) {
        $scope.result = "Please enter data first";
        $scope.color = "danger";
        $scope.borderColor = "red";
        $scope.border = "border border-danger";
      } else if (count >= 1 && count <= 3) {
        $scope.result = "Enjoy!";
        $scope.color = "success";
        $scope.borderColor = "green";
        $scope.border = "border border-success";
      } else {
        $scope.result = "Too much!";
        $scope.color = "success";
        $scope.borderColor = "green";
        $scope.border = "border border-success";
      }
    };
  }
})();
