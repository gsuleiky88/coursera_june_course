(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['UserService'];
function MyinfoController(UserService) {
  var $ctrl = this;
  var notification = "Not Signed Up Yet. Sign up Now!";
  var error = false;

$ctrl.$onInit = function () {
  $ctrl.userInfo = angular.isDefined(UserService.getUser()) ? UserService.getUser() : {};

    if(!$ctrl.userInfo.choosenMenuCateg ){
    $ctrl.error = true;
    }
    else {
      $ctrl.userInfo = UserService.getUser();
    }

}

}


})();
