app.controller('recipeBookCtrl', ['$location', 'dataService', function($location, dataService) {
    var self = this;

    self.recipebook = {};

    dataService.getRecipeBook()
        .success(function(data) {
            console.log(data);
            self.recipebook = data;
        })
        .error(function(err) {
            console.log(err);
        });

    self.createBook = function()    {
        dataService.createBook()
        .success(function(data) {
            console.log(data);
            self.recipebook = data;
        })
        .error(function(err) {
            console.log(err);
        });
    };
}]);
