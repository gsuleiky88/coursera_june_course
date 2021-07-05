(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items','$stateParams']
function ItemDetailController(items,$stateParams) {
  var itemDetail = this;
      itemDetail.items = items;
      itemDetail.categoryShortName = $stateParams.categoryShortName;
}

})();
