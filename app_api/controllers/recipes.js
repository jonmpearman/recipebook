var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');
var Ingredients = mongoose.model('Ingredients');
var Directions = mongoose.model('Directions');

module.exports.addRecipe = function(req, res) {
    var recipe = new Recipe();

    recipe.title = req.body.title;
    recipe.ingredients = addIngredients();
    recipe.steps = addDirections();

    recipe.save(function(err) {
        if(err) console.log(err);

        res.status(200);
    });
};

module.exports.addIngredients = function(req, res) {
    var ingredients = new Ingredients();

    ingredients.ingredient = req.body.ingredient;
    ingredients.ingredientCount = req.body.ingredientCount;

    ingredients.save(function(err) {
        if(err) console.log(err);

        res.status(200);
    });
};

module.exports.addDirections = function(req, res) {
    var directions = new Directions();

    directions.direction = req.body.direction;
    directions.stepNumber = req.body.stepNumber;

    directions.save(function(err) {
        if(err) console.log(err);

        res.status(200);
    }
};
