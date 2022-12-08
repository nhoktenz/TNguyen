(function () {
  "use strict";

  angular.module("common").service("UserService", UserService);

  function UserService() {
    var service = this;
    var data = null;

    service.hasData = function () {
      return data != null;
    };
    service.getData = function () {
      return data;
    };

    service.save = function (userData) {
      if (!userData) {
        throw new Error("Data cannot be empty!");
      }

      data = {};
      data.firstName = getProperty(userData, "firstName", true);
      data.lastName = getProperty(userData, "lastName", true);
      data.emailAddress = getProperty(userData, "emailAddress", true);
      data.phone = getProperty(userData, "phone", true);
      data.favorite = getProperty(userData, "favorite", true);
    };

    function getProperty(obj, name, required) {
      if (!obj[name] && required) {
        throw new Error('"' + name + '" data is required');
      }
      return obj[name];
    }
  }
})();
