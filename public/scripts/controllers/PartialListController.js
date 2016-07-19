/**
 * Created by pviswanatham on 7/4/2016.
 */

(function (){
    'use strict';

    angular.module('routerApp').controller('PartialListController', PartialListController);

    function PartialListController($scope, PartialListService, $location, $http){
        var PartialListController = this;

        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        activate();
        function activate() {
            //PartialListController.getDetails = getDetails;
        }

        $scope.getDetails = function() {
            PartialListService.getUserDetails().then(successCallback, failureCallback);
        }
        console.log('inside controller');
        //$scope.getDetails = function() {
        //}

        function successCallback(response) {
            console.log('inside successCallback response', response);
            $scope.usersDetails = response.data;
        }
        function failureCallback(response) {
            console.log('inside failureCallback response', response);
            $location.path('/error');
        }

        //$scope.addingUser = function() {
        //    $http.post('/adduser', $scope.addUser).success(function(response) {
        //        $scope.user = response;
        //        refresh();
        //    });
        //    //PartialListService.addUserDetails().then(successCallback, failureCallback);
        //}
    }
})();