// Client side angular app thing!

'use strict';

angular.module('appModule', [
    'ui.router'
])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/404');

        $locationProvider.html5Mode(true);
    });