var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Recipe = require('./recipe.js').schema;

var ingredientsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    recipe: [{type: Schema.Types.ObjectId, ref: 'Recipe' }],
    ingredient: [ String ],
    ingredientCount: [ Number ]
});

mongoose.model('Ingredients', ingredientsSchema);
