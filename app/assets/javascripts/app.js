(function(){
  var app = angular.module('scholarShipIt', ['ui.router','templates']);

  app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'home/_home.html'
      });

    $urlRouterProvider.otherwise('home');
  });

}());