app.controller('profileCtrl', ['$location', 'dataService', function($location, dataService) {
    var self = this;
    
    self.user = {};
    
    dataService.getProfile()
        .success(function(data) {
            self.user = data;
        })
        .error(function(err) {
            console.log(err);
    });
}]);