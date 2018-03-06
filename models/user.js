const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// schema = object that outlines what a new model should contain
const { Schema } = mongoose;

// initilize a new schema
// specify data-type to help prevent data corruption
const User = new Schema({
  username: String,
  password: { type: String, select: false },
  firstName: String,
  lastName: String,
  email: String,
  passwordReset: { type: String, select: false },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

// collections would be the plural of the model, in case above - users
