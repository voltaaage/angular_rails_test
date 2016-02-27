(function() {
  var app = angular.module('scholarShipIt');
  
  var HomeController = function($scope) {
    $scope.test = "testing";
  };
  
  app.controller('HomeController', HomeController);
}());