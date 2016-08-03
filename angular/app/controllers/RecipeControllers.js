app.controller('RecipesAllController', ['$scope', '$route', 'recipeService', function($scope, $route, recipeService) {

	var self = this;
	self.recipes = {};

	self.init = function() {

		recipeService.getAllRecipes().then(function(data) {
			self.recipes = data;
		}, function(error) {
			//Notifications.error('Error getting recipe data.');
		});
	}

	self.init();
}]);