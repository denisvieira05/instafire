(function () {
    angular.module('instafire').constant('APP_SETTINGS', {
        "FIREBASE_URL": "https://instafire.firebaseio.com"
    });

    angular.module('instafire').run(function ($rootScope, $location) {
        $rootScope.user = null;

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.user == null) {
                $location.path("/login");
            }
        });
    });
})();