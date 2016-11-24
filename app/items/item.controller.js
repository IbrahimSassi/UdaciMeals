/**
 * Created by Ibrahim on 24/11/2016.
 */

angular.module('udaciMeals')
.controller('itemCtrl',['$stateParams','FoodFinderService',
    function ($stateParams,FoodFinderService) {
    var vm = this;
       FoodFinderService.getMenu().then(function (data) {
           data.data.forEach(function (item) {

               if(item.id==$stateParams.id)
               {
                   console.log(item)
                   vm.item = item;

               }
           })
       });

}])