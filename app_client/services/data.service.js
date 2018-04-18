app.factory('dataService', ['$http', 'authentication', 'recipesService', function($http, auth, recipes) {
    var self = this;

    self.getProfile = function() {
        return $http.get('/api/profile', {
            headers: {
                Authorization: 'Bearer ' + auth.getToken()
            }
        });
    };
    self.getRecipeBook = function() {
        if (auth.isLoggedIn()) {
            return $http.get('/api/recipebook');
        }
    };
    self.createBook = function() {
        // $http.post('/api/recipebook', {
        //     owner: auth.currentUser(),
        //     title: 'My Recipe',
        //     recipes: recipes.createRecipe(),
        //     createdDate: new Date(),
        //     recipesCount: 1
        // });
        consoloe.log(auth.currentUser());
    };

    return {
        getProfile: self.getProfile,
        getRecipeBook: self.getRecipeBook,
        createBook: self.createBook
    };
}]);
