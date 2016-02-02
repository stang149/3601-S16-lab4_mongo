//'use strict';

angular.module('stdComponents').controller('navbarCtl', function($location){
    console.log("Navbar controller loaded!");

    var navbar = this;

    navbar.location = $location.path();

    navbar.textField = "";

    navbar.pages = [
        {text: "Home", link: '/'},
        {text: "About", link: '/about'},
        {text: "404 Page", link: '/w45rtw4t45t'}
    ];

    navbar.isActive = function(route){
        return route === navbar.location;
    }

});
