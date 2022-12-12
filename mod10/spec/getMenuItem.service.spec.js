describe("menuservice", function () {
  var menuitems;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module("common");

    inject(function ($injector) {
      menuitems = $injector.get("MenuService");
      $httpBackend = $injector.get("$httpBackend");
      ApiBasePath = $injector.get("ApiPath");
    });
  });

  console.log(menuitems);
  console.log($httpBackend);
  console.log(ApiBasePath);

  it("should return menu item", function () {
    console.log(ApiBasePath);
    $httpBackend
      .whenGET(ApiBasePath + "/menu_items/L/menu_items/0.json")
      .respond({
        description:
          "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
        name: "Orange Chicken",
        price_large: 9.75,
        short_name: "L1",
      });
    var item = "L1";
    menuitems.getMenuItem(item).then(function (response) {
      expect(response.data).toEqual({
        description:
          "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
        name: "Orange Chicken",
        price_large: 9.75,
        short_name: "L1",
      });
    });
    $httpBackend.flush();
  });
});
