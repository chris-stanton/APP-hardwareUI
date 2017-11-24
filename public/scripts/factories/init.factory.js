
myApp.factory('InitFactory',['$http', '$location', 'alertify', 'UserService', function($http, $location, alertify, UserService) {

  console.log('InitFactory running...');


// setting screen notifiaction position
  alertify.logPosition('top right');

  function init() {
    // logged in alert message
    setTimeout(function() {
      let loggedInUser = UserService.userObject.userName;
      alertify.log('<div class="alertMessage">' +
                     '<img src="../../assets/images/icons/favicon.ico"> Welcome ' +
                       loggedInUser +
                   '</div>');
    }, 200);
  };

  init();

  // init object from Arduino system status (mockup object)
  const arduinoObject = {
    temp: 73,
    rpm: 18,
    video: 'null',
    light: 'ON',
    light_RGB: 'rgb(255, 255, 255)',
    vacuum: 'OFF',
    fan: 'OFF'
  }

  // init object from Arduino connection status (mockup object)
  const arduinoConnection = {
    strength: 'Good',
    name: 'stanton',
    address: '90.639.00.753'
  }





  // public API
  return {
    // init object from arduino system status details
    arduinoObject : arduinoObject,
    // init object from arduino for connection details
    arduinoConnection : arduinoConnection
  }

}]); // end myAPP
