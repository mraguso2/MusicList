const express = require('express');
const User = require('../../models/user'); // need to require user model
// mongoose models are also used to retreive data
// mongoose models are tied to it's plural collection
// user (model) -- users (collection)

const router = express.Router();

// POST to /find
router.post('/find', (req, res, next) => {
  // Get the requested user
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.json({ error: err });
    }
    if (!user) {
      return res.json({ error: 'Username cannot be found' });
    }
    const { username, albums, artists } = user;
    return res.json({ username, albums, artists });
  });
});

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
