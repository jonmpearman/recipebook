var app = angular.module('NodePractice', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            controllerAs: 'home',
            templateUrl: '/home/home.view.html'
        })
        .when('/register', {
            controller: 'registerCtrl',
            controllerAs: 'register',
            templateUrl: '/auth/register/register.view.html'
        })
        .when('/login', {
            controller: 'loginCtrl',
            controllerAs: 'login',
            templateUrl: '/auth/login/login.view.html'
        })
        .when('/profile', {
            controller: 'profileCtrl',
            controllerAs: 'profile',
            templateUrl: '/profile/profile.view.html'
        })
        .otherwise({ redirectTo: '/' });
    
    $locationProvider.html5Mode(true);
}]);

//profile page is being requested too many times. Figure out why it makes so many requests.
app.run(['$rootScope', '$location', 'authentication', function($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        if($location.path() === '/profile' && !authentication.isLoggedIn()) {
            $location.path('/');
        }
    });
}]);