var mongoose = require('mongoose');
var User = mongoose.model('User');
var RecipeBook = mongoose.model('RecipeBook');

module.exports.recipeBookRead = function(req, res) {
    if(!req.payload._id) {
        console.log(req.payload);
        res.status(401).json({
            "message": "Cannot find Recipe Book"
        });
    } else {
        RecipeBook
            .findById(req.payload._id)
            .exec(function(err, recipebook) {
                console.log(recipebook);
                res.status(200).json(recipebook);
        });
    }
};
