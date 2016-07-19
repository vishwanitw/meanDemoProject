/**
 * Created by pviswanatham on 7/4/2016.
 */

var routerApp = angular.module('routerApp',['ui.router']);

routerApp.config(configFunction);

function configFunction($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home',{
            url: '/home',
            templateUrl : 'views/partial-one.html',
            controller: 'PartialListController',
            controllerAs: 'PartialListController'
        })
        .state('list',{
            url:'/list',
            templateUrl: 'views/partial-list.html',
            controller: 'PartialListController',
            controllerAs: 'PartialListController'
        })
        .state('paragraph',{
            url:'/paragraph',
            template: 'This is the paragraph template with template but not templateUrl'
        })
        .state('userdetails',{
            url:'/userdetails',
            templateUrl: 'views/partial-userdetails.html',
            controller: 'PartialListController',
            controllerAs: 'PartialListController'
        })
        .state('error',{
            url:'/error',
            templateUrl: 'views/404.html'
        });

}