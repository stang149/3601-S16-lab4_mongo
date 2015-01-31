'use strict';

angular.module("superSweetAppThing")
    .controller('mainCtrl', function($scope, $http){
        console.log("main controller loaded!");

        $scope.textField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.data = [];

        $scope.getThings = function(){
            $http.get('api/things').success(function(things) {
                $scope.data = things;
            });
        };

        $scope.getThings();

        $scope.addData = function(){
            if($scope.textField.length >= 1) {
                $http.post('api/things', {text: $scope.textField}).success(function(){
                    $scope.getThings();
                });
                $scope.textField = "";
            }
        };

        $scope.removeData = function(index){
            $http.delete('/api/things/' + $scope.data[index]._id).success(function(){
                $scope.getThings();
            });
        };

        $scope.cat = function(str1, str2){
            return str1 + str2;
        };

        $scope.itemsInList = function(){
            return $scope.data.length;
        };

    });