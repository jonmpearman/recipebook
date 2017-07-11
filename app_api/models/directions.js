var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Recipe = require('./recipe.js').schema;

var directionsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    recipe: [{type: Schema.Types.ObjectId, ref: 'Recipe' }],
    direction: [ String ],
    stepNumber: [ Number ]
});

mongoose.model('Directions', directionsSchema);
