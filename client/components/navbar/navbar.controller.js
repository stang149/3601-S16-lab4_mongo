//'use strict';

angular.module("superSweetAppThing")
    .controller('navbarCtrl', function($scope){
    console.log(" navbar controller loaded!");

    $scope.textField = "";

    $scope.pages = [
        {text: "Home", link: 'main'},
        {text: "About", link: 'about'},
        {text: "404 Page", link: '/wefwrtbertbeb'}
    ];
});