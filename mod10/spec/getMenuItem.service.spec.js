describe("menuservice", function () {
  var menuitems;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module("common");

    inject(function ($injector) {
      menuitems = $injector.get("MenuService");
      $httpBackend = $injector.get("$httpBackend");
      ApiPath = $injector.get("ApiPath");
    });
  });

  it("should return favorite item exists", function () {
    $httpBackend.whenGET(ApiPath + "/menu_items/L/menu_items/0.json").respond({
      description:
        "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
      name: "Orange Chicken",
      price_large: 9.75,
      short_name: "L1",
    });

    menuitems.getMenuItem("L1").then(function (response) {
      expect(response).toEqual({
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
      .whenGET(ApiPath + "/menu_items/X/menu_items/-1.json")
      .respond("null");

    menuitems.getMenuItem("X0").then(function (response) {
      expect(response).toEqual("null");
    });
    $httpBackend.flush();
  });
});
