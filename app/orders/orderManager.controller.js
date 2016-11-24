'use strict';

angular.module('udaciMeals')

    .controller('orderCtrl', ['orderManagerService',function(orderManagerService) {
        this.selectedDay = orderManagerService.getActiveDay();
        console.log(this.selectedDay)
        this.list= orderManagerService.getOrders();

        this.setActiveDay = function (day) {
            orderManagerService.setActiveDay(day);
            console.log(this.selectedDay)

        }
    }]);