'use strict';

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'views/404/404.html'
            });
    });