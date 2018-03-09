const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// schema = object that outlines what a new model should contain
const { Schema } = mongoose;

// initilize a new schema
// specify data-type to help prevent data corruption
const User = new Schema({
  albums: [Schema.Types.Mixed],
  artists: [Schema.Types.Mixed],
  email: String,
  firstName: String,
  lastName: String,
  passwordReset: { type: String, select: false },
  username: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

// collections would be the plural of the model, in case above - users
