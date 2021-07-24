(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://gsuleiky88-restaurant-app.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
