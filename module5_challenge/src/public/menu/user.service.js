(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);

UserService.$inject = ['$http'];
function UserService($http) {
  var service = this;

  service.signUp = function (user) {
    service.user = user;
    }

}


})();
