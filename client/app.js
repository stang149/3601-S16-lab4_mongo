// Client side angular app thing!

'use strict';

angular.module('superSweetAppThing', [
    'ui.router'
])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    });