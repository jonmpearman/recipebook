app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'angular/app/views/home.html',
			access: {
				restricted: false
			}
		})
		.when('/recipes', {
			templateUrl: 'angular/app/views/recipes-all.html',
			access: {
				restricted: false
			}
		})
		.otherwise({ redirectTo: '/' });
});