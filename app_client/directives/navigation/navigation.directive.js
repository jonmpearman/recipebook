app.directive('navigation', function() {
    return {
        restrict: 'E',
        templateUrl: '/directives/navigation/navigation.template.html',
        controller: 'navigationCtrl',
        controllerAs: 'navCtrl'
    };
});