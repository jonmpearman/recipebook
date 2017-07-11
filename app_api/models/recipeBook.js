var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./users.js').schema;
var Recipe = require('./recipe.js').schema;

var recipeBookSchema = new Schema({
    _id: Schema.Types.ObjectId,
    owner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    title: String,
    recipes: {
        recipeDetails: [{ type: Schema.Types.ObjectId, ref: 'Recipe'}]
    },
    createdDate: Date,
    recipesCount: Number
});

recipeBookSchema.methods = {
    addRecipe: function(recipe) {
        this.recipes.add(recipe);
    },
    removeRecipe: function(recipe) {
    },
    getRecipes: function(callback) {
        return this.db.mobdel('User').findById(this.owner, callback);
    },
    setTotalRecipes: function() {
        for(var key in this.recipeDetails) {
            if(!this.recipeDetails.hasOwnProperty(key)) continue;

            var obj = this.recipeDetails[key]
            for(var prop in obj) {
                if(!obj.hasOwnProperty(prop)) continue;

                this.recipesCount++;
            }
        }
        return this.recipesCount;
    },
    getTotalRecipes: function() {
        return this.recipesCount;
    }

};

mongoose.model('RecipeBook', recipeBookSchema);
