
// requiring dependancies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('./server/strategies/user_sql.js');
const session = require('express-session');

// defining auth routes
const index = require('./server/routes/auth/index.js');
const user = require('./server/routes/auth/user.js');
const register = require('./server/routes/auth/register.js');

// defining other route files
const arduino = require('./server/routes/arduino.js');

// serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// handle index file separately
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


// Passport Session Configuration
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: {maxage: 60000, secure: false}
}));

// starts up passport session
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/register', register);
app.use('/user', user);

app.use('/arduino', arduino);

app.use('/*', index); // catch

// port listening on
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log('Listening on port: ', app.get('port'));
});
