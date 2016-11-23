'use strict';

angular.module('udaciMeals')

    .controller('orderCtrl', ['orderManagerService',function(orderManagerService) {
        this.list= orderManagerService.getOrders();
        this.setActiveDay = function (day) {
            orderManagerService.setActiveDay(day);
        }
    }]);