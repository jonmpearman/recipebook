app.controller('registerCtrl', ['authentication', '$location', function(auth, $location) {
    var self = this;
    
    self.credentials = {
        name: '',
        email: '',
        password: ''
    };
    self.onSubmit = function() {
        auth
            .register(self.credentials)
            .error(function(err) {
                alert(err);
            })
            .then(function() {
                $location.path('profile');
        });
    };
}]);