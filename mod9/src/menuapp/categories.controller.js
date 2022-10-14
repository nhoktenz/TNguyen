(function () {
  "use strict";

  angular
    .module("MenuApp")
    .controller("CategoriesListController", CategoriesListController);

  CategoriesListController.$inject = ["categories"];
  function CategoriesListController(categories) {
    var cat = this;
    console.log(categories);
    cat.categories = categories;
  }
})();
