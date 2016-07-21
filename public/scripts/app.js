angular.module("homeHubApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log('hello hub.');
  }
});
