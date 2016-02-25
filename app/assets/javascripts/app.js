(function(){
  var app = angular.module('scholarShipIt', ['ui.router']);
  
  app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'MainController',
        templateUrl: '_home.html'
      });
      
    $urlRouterProvider.otherwise( function($injector, $location) {
      var $state = $injector.get("$state");
      $state.go('home');
  });
  
  
}());