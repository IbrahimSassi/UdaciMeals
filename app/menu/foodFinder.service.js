/**
 * Created by Ibrahim on 23/11/2016.
 */

angular.module('udaciMeals')

.service('FoodFinderService',function ($http) {
    this.getMenu = function () {
        return $http.get('menu.json');
    }

})
;
