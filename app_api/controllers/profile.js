var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {
    if(!req.payload._id) {
        console.log(req.payload);
        res.status(401).json({
            "message": "UnauthorizedError: private profile "
        });
    } else {
        User
            .findById(req.payload._id)
            .exec(function(err, user) {
                res.status(200).json(user);
        });
    }
};

module.exports.allUsers = function(req, res) {};