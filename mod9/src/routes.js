(function () {
  "use strict";

  angular.module("MenuApp").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise("/");

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state("home", {
        url: "/",
        templateUrl: "src/menuapp/templates/home.template.html",
      })

      .state("categories", {
        url: "/categories",
        templateUrl: "src/menuapp/templates/categories.template.html",
        controller: "CategoriesListController as categoryList",
        resolve: {
          categories: [
            "MenuDataService",
            function (MenuDataService) {
              return MenuDataService.getAllCategories();
            },
          ],
        },
      })

      .state("categories.items", {
        //url: "/items/{categoryShortName}",
        url: "/{categoryShortName}",
        templateUrl: "src/menuapp/templates/items.template.html",
        controller: "ItemsListController as itemList",
        params: { categoryShortName: null },
        resolve: {
          items: [
            "$stateParams",
            "MenuDataService",
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory(
                $stateParams.categoryShortName
              );
            },
          ],
        },
      });
  }
})();
