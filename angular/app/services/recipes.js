app.factory('recipeService', ['$http', 'configuration', function($http, configuration) {

	return {
		getAllRecipes: function() {
			var promise = $http.get(configuration.apiURL + '/index.php/recipes')
				.then(function(response) {
					return response.data;
				}, function(error) {});

				return promise;
		}
	}
}]);