app.factory('recipesService', ['$http', 'authentication', function($http, auth) {
    var self = this;

    self.createRecipe = function() {
        $http.post('/api/recipes', {
            title: 'Recipe #1',
            ingredients: self.createIngredients(),
            steps: self.createDirections(),
        });
    };

    self.createIngredients = function() {
        $http.post('api/recipes/ingredients', {
            ingredient: [
                'Cheese',
                'Milk',
                'Eggs'
            ],
            ingredientCount: [
                3,
                4,
                5
            ]
        });
    };

    self.createDirections = function() {
        $http.post('api/recipes/directions', {
            direction: [
                'This',
                'That',
                'Then',
                'There'
            ],
            stepNumber: [
                1,
                2,
                3
            ]
        });
    }

    return {
        createRecipe: self.createRecipe,
        createIngredients: self.createIngredients,
        createDirections: self.createDirections
    };
}]);
