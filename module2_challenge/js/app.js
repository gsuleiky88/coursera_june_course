( function () {
  'use strict';

  var ShoppingListCheckOff = angular.module('ShoppingListCheckOff', []);
      ShoppingListCheckOff.controller('ToBuyController', ToBuyController);
      ShoppingListCheckOff.controller('AlreadyBoughtController', AlreadyBoughtController);
      ShoppingListCheckOff.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items =  ShoppingListCheckOffService.getToBuyItems();

    toBuyList.buyItems = function (itemIndex) {
      console.log(toBuyList.errorMessage);
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject =  ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    { name: "Oreo cookie bags", quantity: 10 },
    { name: "Orange Juice bottles", quantity: 3 },
    { name: "Pecan Pie", quantity: 6 },
    { name: "Coffee bags", quantity: 7 },
    { name: "Apple", quantity: 6 }
  ];
var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  }

  service.getBoughtItems = function () {
    return boughtItems;
  }

  service.buyItem = function (itemIndex) {

    if(angular.isDefined (toBuyItems[itemIndex])) {
        var item = {
        name: toBuyItems[itemIndex].name,
        quantity: toBuyItems[itemIndex].quantity
      };
      boughtItems.push (item);
      service.removeItem(itemIndex);
    }
  }

  service.removeItem = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

}

})();
