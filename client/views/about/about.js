'use strict';

console.log("about.js loaded!");

angular.module("superSweetAppThing")
    .config(function($stateProvider){
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'views/about/about.html',
                controller: 'aboutCtrl'
            });
    });