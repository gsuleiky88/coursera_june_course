(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService', 'MenuService'];
function SignupController(UserService, MenuService) {
  var $ctrl = this;
  var notification = "Invalid Form";
  var error = false;

  $ctrl.signup = function () {

   MenuService.getMenuItemsByShortName($ctrl.user.short_name).then( function(resp) {
     if(resp.short_name) {
        UserService.setUserInfo($ctrl.user);
        UserService.setChoosenMenuCateg(resp);
        $ctrl.success = true;
        $ctrl.error = false;
        $ctrl.notification = "Your information has been saved";
    }
     else {
       $ctrl.error = true;
       $ctrl.success = false;
       $ctrl.notification = "No such menu number exists";
     }
   }).catch (function (res) {
     $ctrl.error = true;
     $ctrl.notification = "No such menu number exists";
     UserService.setUserInfo({});
   })

  }
}


})();
