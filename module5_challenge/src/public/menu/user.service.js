(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);

UserService.$inject = ['$http'];
function UserService($http) {
  var service = this;
      service.user = {};

  service.setUserInfo = function (user) {
      service.user = user;
    }
  service.getUser = function () {
    return service.user;
    }
  service.setChoosenMenuCateg = function (choosenMenuCateg) {
    return service.user.choosenMenuCateg = choosenMenuCateg;
    }

}


})();
