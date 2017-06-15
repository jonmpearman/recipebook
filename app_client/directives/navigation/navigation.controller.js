app.controller('navigationCtrl', ['$location', 'authentication', '$scope', function($location, auth, $scope) {
    var self = this;

    self.isLoggedIn = function() {
        return auth.isLoggedIn();
    };
    
    self.currentUser = function() {
        var user = auth.currentUser();
        if(undefined !== user) {
            return user.name;
        } else {
            return "";
        }
    };
    
    self.logout = function() {
        auth.logout();
        $location.path('/');
    };
}]);