(function(){
    'use strict';
    angular.module('instafire').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/home.html'
            })
            .when('/post', {
                controller: 'PostCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/post.html'
            })
            .when('/login', {
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/login.html'
            });
    });
})();