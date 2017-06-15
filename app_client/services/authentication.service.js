app.factory('authentication', ['$http', '$window', '$rootScope', function($http, $window, $rootScope) {
    var self = this;
    
    self.saveToken = function(token) {
        $window.localStorage['mean-token'] = token;
    };
    self.getToken = function() {
        return $window.localStorage['mean-token'];
    };
    self.isLoggedIn = function() {
        
        var token = self.getToken();
        var payload;

        if(token) {
            payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);
            
            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };
    self.currentUser = function() {
        
        if(self.isLoggedIn()) {
            var token = self.getToken();
            var payload = token.split('.')[1];
            
            payload = $window.atob(payload);
            payload = JSON.parse(payload);
            
            return {
                email: payload.email,
                name: payload.name
            };
        }
    };
    register = function(user) {
        return $http.post('/api/register', user).success(function(data) {
            self.saveToken(data.token);
        });
    };
    login = function(user) {
        return $http.post('/api/login', user).success(function(data) {
            self.saveToken(data.token);
        });
    };
    logout = function() {
        $window.localStorage.removeItem('mean-token');
    };
    
    return {
        currentUser: self.currentUser,
        saveToken: self.saveToken,
        getToken: self.getToken,
        isLoggedIn: self.isLoggedIn,
        register: register,
        login: login,
        logout: logout
    };
}]);