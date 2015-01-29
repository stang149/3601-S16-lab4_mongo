// Client side angular app thing!

'use strict';

angular.module('superSweetAppThing', [
    'ui.router'
])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });