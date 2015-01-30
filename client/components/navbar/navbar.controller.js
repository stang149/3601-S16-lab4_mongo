//'use strict';

angular.module("superSweetAppThing")
    .controller('navbarCtrl', function($scope, $location){
    console.log(" navbar controller loaded!");

    $scope.location = $location.path();

    $scope.textField = "";

    $scope.pages = [
        {text: "Home", link: '/'},
        {text: "About", link: '/about'},
        {text: "404 Page", link: '/wefwrtbertbeb'}
    ];

    $scope.isActive = function(route){
        return route === $location.path()
    };
});