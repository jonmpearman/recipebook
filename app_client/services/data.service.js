app.factory('dataService', ['$http', 'authentication', function($http, auth) {
    var self = this;
    
    self.getProfile = function() {
        return $http.get('/api/profile', {
            headers: {
                Authorization: 'Bearer ' + auth.getToken()
            }
        });
    };
    
    return {
        getProfile: self.getProfile
    };
}]);