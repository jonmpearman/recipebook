var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

userSchema.methods = {
    setPassword: function(password) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    },
    validPassword: function(password) {
        var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
        return this.hash === hash;
    },
    generateJwt: function() {
        var expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);

        return jwt.sign({
            _id: this._id,
            email: this.email,
            name: this.name,
            exp: parseInt(expiry.getTime() / 1000),
        }, "SECRET_KEY");
    }
};

mongoose.model('User', userSchema);
