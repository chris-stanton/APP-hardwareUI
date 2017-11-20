
///////////////////
// Passport file //
///////////////////

const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');
const pg = require('pg');
const pool = require('../../modules/database-config');

// module with bcrypt functions
const encryptLib = require('../../modules/encryption.js');
const connection = require('../../modules/connection.js');

// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../../../public/views/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {

  var saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password),
    email: req.body.email
  };
  console.log('new user:', saveUser);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id",
      [saveUser.username, saveUser.password, saveUser.email],
        function (err, result) {
          client.end();

          if(err) {
            console.log("Error inserting data: ", err);
            next(err);
          } else {
            res.redirect('/');
          }
        });
  });

});


module.exports = router;
