'use strict';

// Declare app level module which depends on views, and components
angular.module('udaciMeals', [
  'ui.router'
]).
config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

$urlRouterProvider.otherwise('/');


$stateProvider
    .state('home',{
      url:'/',
      templateUrl:'menu/menu.html',
      controller: 'menuCtrl as menu'
    })
    .state('item',{
      url:'/item/:id',
      templateUrl:'items/item.html',
      controller:'itemCtrl as myItem'
    })
    .state('item.nutrition',{
      url:'/nutrition',
      templateUrl:'items/nutrition.html'
    })

;



}]);
