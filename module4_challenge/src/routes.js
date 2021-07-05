(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
   .state('categories', {
     url: '/categories',
     templateUrl: 'src/menuapp/templates/main-categories.template.html',
     controller: 'CategoriesController as mainMenu',
     resolve: {
       categories: ['MenuDataService', function (MenuDataService) {
         return MenuDataService.getAllCategories();
       }]
     }
   })

 .state('itemDetail', {
    url: '/categories/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/main-items.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }

  });
}

})();
