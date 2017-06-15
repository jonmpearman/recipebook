var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'SECRET_KEY',
    userProperty: 'payload'
});

var profileCtrl = require('../controllers/profile');
var authCtrl = require('../controllers/authentication');

router.get('/profile', auth, profileCtrl.profileRead);

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

module.exports = router;