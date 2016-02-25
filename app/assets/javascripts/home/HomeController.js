(function() {
  var app = angular.module('scholarShipIt');
  
  var HomeController = function($scope) {
    $scope.test = "testing";
  };
  console.log("test");
  
  app.controller('HomeController', HomeController);
}());