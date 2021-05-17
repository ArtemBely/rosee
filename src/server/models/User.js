const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
   username:{type: String, required: true},
   userphone:{type: String, required: true},
   email:{type: String, required: true},
   timestamp: {type: String},
   adminComment: {type: String},
   password: {type: String, required: true},
   useraddress: {type: String, required: true},
   typeOfPayment: {type: String, required: true},
   typeOfSkin: {type: String},
   comments: {type: String},
   letter: {type: String}
});

module.exports = mongoose.model('User', userSchema);
module.exports.createUser = function(newUser, callback) {
var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
