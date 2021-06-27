( function () {
  'use strict';

  var NarrowItDownApp = angular.module('NarrowItDownApp', []);
      NarrowItDownApp.controller('NarrowItDownController', NarrowItDownController);
      NarrowItDownApp.service('MenuSearchService', MenuSearchService);
      NarrowItDownApp.directive('foundItems', FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'template/foundItems.html',
      scope: {
        items: '<',
        myTitle: '@title',
        badRemove: '=',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItemsDirCtrl',
      bindToController: true
    };

    return ddo;
  }


  function FoundItemsDirectiveController() {
    var foundItemsDirCtrl = this;

  foundItemsDirCtrl.checkFoundItemsLength = function () {
      if(foundItemsDirCtrl.items) {
        if(foundItemsDirCtrl.items.length==0)
          return true;
          else return false;
      }
    };
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var foundItems = this;
    var searchTerm = '';

    foundItems.getMatchedMenuItems =  function () {
      if(foundItems.searchTerm){
      var promise = MenuSearchService.getMatchedMenuItems(foundItems.searchTerm);
      promise.then (function (result){
        foundItems.found = result;
      });
    }
    else foundItems.found = [];
    }

    foundItems.removeItem = function (index) {
      foundItems.found.splice(index, 1);
    }

  }

MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
  var service = this;
  var foundItems = [];

  service.getMatchedMenuItems = function (searchTerm) {
    foundItems = [];
    return $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
          }).then(function (result) {
              // process result and only keep items that match
                angular.forEach (result.data.menu_items, function (item, key){
                if((item.description).toLowerCase().indexOf(searchTerm) !== -1){
                  foundItems.push (item);
              }
              });
              // return processed items
              return foundItems;
          });
  }

}

})();
