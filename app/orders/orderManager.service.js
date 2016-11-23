/**
 * Created by Ibrahim on 23/11/2016.
 */

angular.module('udaciMeals')

    .service('orderManagerService',function () {

        var selectedDay = 'Monday';

        var orderSelection =
        {
            Monday:{
                breakfast: '',
                lunch:'',
                dinner:''
            },
            Tuesday:{
                breakfast: '',
                lunch:'',
                dinner:''
            },
            Wesdnesday:{
                breakfast: '',
                lunch:'',
                dinner:''
            },
            Thursday:{
                breakfast: '',
                lunch:'',
                dinner:''
            },
            Friday:{
                breakfast: '',
                lunch:'',
                dinner:''
            }
        };

        this.setActiveDay = function (day) {
            selectedDay =day;
        }
        this.getActiveDay = function () {
            return selectedDay;
        }

        this.chooseMenuOption = function (meal,menuItem) {
            orderSelection[selectedDay][meal] = menuItem;
        };

        this.removeMenuOption = function (day,menuCategory) {
            orderSelection[day][menuCategory] = '';
        };

        this.getOrders= function () {
            return orderSelection;
        }


    })
;
