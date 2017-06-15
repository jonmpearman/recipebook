app.controller('loginCtrl', ['authentication', '$location', function(auth, $location) {
    var self = this;
    
    self.credentials = {
        email: '',
        password: ''
    };
    self.onSubmit = function() {
        auth
            .login(self.credentials)
            .error(function(err) {
                alert(err);
            })
            .then(function() {
                $location.path('profile');
        });
    }
}]);