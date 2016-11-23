'use strict';

angular.module('myApp.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/menu', {
    templateUrl: 'menu/menu.html',
    controller: 'menuCtrl as menu'
  });
}])

.controller('menuCtrl', [function() {
  this.items = [
      {
          id:'chicken-pomegranate-salad',
          name:'Chicken Pomegranate Salad',
          img: 'chicken-pomegranate-salad.jpg',
          calories: 430,
          rating:4.1
      },
      {
          id:'strawberry-pudding',
          name:'Strawberry Pudding',
          img: 'strawberry-pudding.jpg',
          calories: 250,
          rating:4.6
      },
      {
          id:'ham-goat-cheese-croissant',
          name:'Ham And Goat Cheese Croissant',
          img: 'ham-goat-cheese-croissant.jpg',
          calories: 610,
          rating:4.5
      },
  ]
}]);