
# Rod Building Hardware Contoller UI


## Description:
###### UI to control my fishing rod dryers speed, fan speed, enclosure temperature and lights remotely.
###### Live demo version: https://hardwareui.herokuapp.com/


## Technologies Used:
#### Software
  1. Express.js
  2. Express-session
  3. Angular.js
  4. Angular Route
  5. Node.js
  6. Socket.io
  7. Johnny-Five
  8. Body-Parser
  9. Bcrypt
  10. Dotenv
  11. PassportJS
  12. Passport-local
  <!-- 13. PG -->
  14. Alertify.js
  15. GIT / GitHub
  16. Heroku

#### Hardware
  1. Arduino ONU
  2. Arduino Capable Monitor (edit Arduino code to specific display)
  3. 24vDC Power Supply
  4. 24vDC 50RPM Motor
  5. DIN Rail w/ Terminal Blocks (refer to system drawing)
  6. 24vDC 1800RPM Fan
  7. 24vDC 500RPM Fan
  8. 12vDC RGB Light Kit w/ Controller



## Install App:
  1. Download zip file
  2. Open terminal and navigate into folder
  3. Create PostgeSQL database (refer to `` database.sql `` file for details)
  3. Run commands:
    - `` npm install `` Installs Node Packages including dependencies from package.json
    - `` npm start `` Starts server
    - `` npm test `` Starts server using Nodemon
  4. Server is listening on port: 5000



## License:
##### Copyright 2017 Christopher J. Stanton

###### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

###### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

###### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
