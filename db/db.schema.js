/**
 * Created by vchris on 12/7/2017.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UserAppDB');

var Schema = mongoose.Schema;

/* Define user schema */
var UserSchema = new Schema ({
    firstname : String,
    lastname : String,
    email : {type: String, required: true, unique: true},
    username : {type: String, required: true},
    password : {type: String, required: true},
    address : String,
});

/* create mongoose model */
var User = mongoose.model('User', UserSchema);

module.exports = User;
