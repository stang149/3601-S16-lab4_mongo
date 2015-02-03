'use strict';

console.log("about.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'views/about/about.html',
                controller: 'aboutCtrl'
            });
    });