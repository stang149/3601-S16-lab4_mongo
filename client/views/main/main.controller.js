'use strict';

angular.module("superSweetAppThing")
    .controller('mainCtrl', function($scope){
        console.log("main controller loaded!");

        $scope.textField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.data = [
            {text: "fish"},
            {text: "kittens"},
            {text: "snake"},
            {text: "badger"},
            {text: "puppies"}
        ];

        $scope.addData = function(){
            if($scope.textField.length >= 1) {
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
        };

        $scope.removeData = function(index){
            $scope.data.splice(index, 1);
        };

        $scope.cat = function(str1, str2){
            return str1 + str2;
        };

        $scope.itemsInList = function(){
            return $scope.data.length;
        };

    });