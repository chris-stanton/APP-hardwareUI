
///////////////////
// Passport file //
///////////////////

// requiring dependancies
const express = require('express');
const router = express.Router();
const passport = require('passport');
const pg = require('pg');
const path = require('path');
const pool = require('../../modules/database-config');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  // check if logged in
  if(req.isAuthenticated()) {
    // send back user object from database
    console.log('logged in ', req.user);
    var userInfo = {
      username : req.user.username,
      user_id : req.user.id,
      email : req.user.email
    };
    res.send(userInfo);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request
    res.send(false);
  }
});

// clear all server session information about this user
router.get('/logout', function(req, res) {
  // Use passport's built-in method to log out the user
  console.log('User logged out');
  req.logout();
  res.sendStatus(200);
});


module.exports = router;
