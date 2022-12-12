describe("menuservice", function () {
  var menuitems;
  var $httpBackend;
  var ApiBasePath;
  var item = "L1";
  var erroritem = "L0";

  beforeEach(function () {
    module("common");

    inject(function ($injector) {
      menuitems = $injector.get("MenuService");
      $httpBackend = $injector.get("$httpBackend");
      ApiBasePath = $injector.get("ApiPath");
    });
  });

  it("should return favorite item exists", function () {
    $httpBackend
      .whenGET(ApiBasePath + "/menu_items/L/menu_items/0.json")
      .respond({
        description:
          "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
        name: "Orange Chicken",
        price_large: 9.75,
        short_name: "L1",
      });

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

  it("should return favorite item does not exist", function () {
    $httpBackend
      .whenGET(ApiBasePath + "/menu_items/L/menu_items/-1.json")
      .respond("null");

    menuitems.getMenuItem(erroritem).then(function (response) {
      expect(response.data).toEqual("null");
    });
    $httpBackend.flush();
  });
});
