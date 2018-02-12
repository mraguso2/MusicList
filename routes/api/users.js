const express = require('express');
const User = require('../../models/user'); // need to require user model
// mongoose models are also used to retreive data
// mongoose models are tied to it's plural collection
// user (model) -- users (collection)

const router = express.Router();

// get us all users
router.get('/list', (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      return res.send(err);
    }
    return res.json(users);
  });
});

module.exports = router;
