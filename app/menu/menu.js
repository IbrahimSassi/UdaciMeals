'use strict';

angular.module('udaciMeals')

.controller('menuCtrl', ['FoodFinderService','orderManagerService',
    function(FoodFinderService,orderManagerService) {

    var vm = this;

    FoodFinderService.getMenu().then(function (data) {
        vm.items = data.data;
    });

        console.log(vm.items);


    this.chooseItem= function (menuCategory,menuItemName) {
        orderManagerService.chooseMenuOption(menuCategory,menuItemName);
    }
    
    this.increment = function (item) {
        item.rating = ((item.rating *10)+1)/10;
    };
    this.decrement = function (item) {
        item.rating = ((item.rating *10)-1)/10;
    };
}]);