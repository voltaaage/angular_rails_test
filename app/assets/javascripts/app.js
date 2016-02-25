(function(){
  var app = angular.module('scholarShipIt', ['ui.router','templates']);

  app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'home/_home.html'
      });

    $urlRouterProvider.otherwise( function($injector, $location) {
      var $state = $injector.get("$state");
      $state.go('home');
  });

}());