(function(){
    'use strict';
    angular.module('instafire').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/modules/dashboard/dashboard.html'
            })
            .when('/post', {
                controller: 'PostCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/modules/post/post.html'
            })
            .when('/login', {
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/modules/login/login.html'
            });
    });
})();