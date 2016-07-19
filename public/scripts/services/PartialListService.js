/**
 * Created by pviswanatham on 7/5/2016.
 */

(function (){
    angular.module('routerApp').service('PartialListService', PartialListService);

    function PartialListService($http) {
        var self = this;

        self.getUserDetails = getUserDetails;
        //self.addUserDetails = addUserDetails;

        function getUserDetails() {
          return  $http.get('http://localhost:3000/users');
        }
    }
})();