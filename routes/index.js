const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Music List Alpha' });
});

const testJSON = [
  {
    name: 'John Smith',
    username: 'CaptainCode'
  },
  {
    name: 'Jane Doe',
    username: 'JaneyCakes'
  }
];

router.get('/sendjson', (req, res, next) => {
  res.json(testJSON); // to send JSON
});

module.exports = router;
