const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// schema = object that outlines what a new model should contain
const { Schema } = mongoose;

// initilize a new schema
// specify data-type to help prevent data corruption
const User = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

// collections would be the plural of the model, in case above - users
