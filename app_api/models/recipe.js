var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecipeBook = require('./recipeBook.js').schema;
var Ingredients = require('./ingredients.js').schema;
var Directions = require('./directions.js').schema;

var recipeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    book: [{ type: Schema.Types.ObjectId, ref: 'RecipeBook' }],
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredients' }],
    steps: [{ type: Schema.Types.ObjectId, ref: 'Directions' }]
});

mongoose.model('Recipe', recipeSchema);
