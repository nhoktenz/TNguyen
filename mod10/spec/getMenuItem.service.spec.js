describe("menuservices", function () {
  var menuitems;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module("common");

    inject(function ($injector) {
      menuitems = $injector.get("MenuService");
      $httpBackend = $injector.get("$httpBackend");
      ApiBasePath = $injector.get("ApiBasePath");
    });
  });

  it("should return categories list", function (shortName) {
    var myArray = shortName.split(/([0-9]+)/);
    var category_short_name = myArray[0];
    var category_num = parseInt(myArray[1]) - 1;
    $httpBackend
      .whenGET(
        ApiBasePath +
          "/menu_items/" +
          category_short_name +
          "/menu_items/" +
          category_num +
          ".json"
      )
      .respond(["Lunch", "Dessert"]);
    menuitems.getMenuItem().then(function (response) {
      expect(response.data.short_name).toEqual(["L1"]);
    });
    $httpBackend.flush();
  });
});
