(function (){
'use strict';

angular.module ('LunchCheck', [])
.controller ('LunchCheckController', LunchCheckController);
LunchCheckController.$inject - ['$scope'];

function LunchCheckController ($scope) {
var message = ['Please enter data first','Enjoy!','Too much!'];
//$scope.valid = '';

$scope.lunchCheck = function () {
  if(angular.isDefined($scope.lunchMenu)) {
  var lunchlist = $scope.lunchMenu.split(',');
  lunchlist = lunchlist.filter (item=>item.trim());

  if(lunchlist.length == 0) {
     $scope.valid = false;
     $scope.result = message[0];
   }
  else if (lunchlist.length > 0 && lunchlist.length <=3) {
    $scope.valid = true;
    $scope.result = message[1];
    }
  else if(lunchlist.length >3){
    $scope.valid = true;
    $scope.result = message[2];
   }
} else {
    $scope.valid = false;
    $scope.result = message[0];
  }
//  $scope.result = lunchlist ($scope.lunchMenu)
}

}
})();
