
///////////////////
// Passport file //
///////////////////

const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');
const pg = require('pg');

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/user',
        failureRedirect: '/'
    })
);

// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
