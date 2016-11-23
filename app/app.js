'use strict';

// Declare app level module which depends on views, and components
angular.module('udaciMeals', [
  'ngRoute',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider
      .when('/menu', {
    templateUrl: 'menu/menu.html',
    controller: 'menuCtrl as menu'})
        .when('/orders', {
    templateUrl: 'orders/order.html',
    controller: 'orderCtrl as menu'
  })
        .otherwise({redirectTo: '/menu'});


  $locationProvider.hashPrefix('!');



}]);
