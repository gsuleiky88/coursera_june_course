(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http','$q', '$timeout']
function MenuDataService($http,$q,$timeout) {
  var service = this;
  var categories = [];
  var items = [];

  service.getAllCategories = function () {
    return $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/categories.json'
          }).then(function (result) {
            categories = result.data;
            return categories;
          });
  }

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName
          }).then(function (result) {
            items = result.data.menu_items;
            return items;
          });
  }

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
      console.log(items);
    }, 800);

    return deferred.promise;
  };
}
})();
