var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'SECRET_KEY',
    userProperty: 'payload'
});

var profileCtrl = require('../controllers/profile');
var authCtrl = require('../controllers/authentication');
var recipeBookCtrl = require('../controllers/recipebook');
var recipeCtrl = require('../controllers/recipes');

router.get('/profile', auth, profileCtrl.profileRead);
router.get('/recipebook', recipeBookCtrl.recipeBookRead);

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.post('/recipes', recipeCtrl.addRecipe);
router.post('recipes/ingredients', recipeCtrl.addIngredients);
router.post('recipes/directions', recipeCtrl.addDirections);

module.exports = router;
