
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const arduino = require('./server/routes/arduino.js')
// const pool = require('./server/modules/database-config');

// defining routes
const routes = require('./server/routes/arduino.js');

//Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Handle index file separately
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '.public/index.html'));
});

// routes
app.use('/arduino', arduino);

// port listening on
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log('Listening on port: ', app.get('port'));
});
