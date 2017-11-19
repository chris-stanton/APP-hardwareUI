
myApp.factory('InitFactory',['$http', '$location', 'alertify', 'UserService', function($http, $location, alertify, UserService) {

  console.log('InitFactory running...');



  function init() {
    // logged in alert message
    setTimeout(function() {
      let loggedInUser = UserService.userObject.userName;
      alertify.logPosition('top right');
      alertify.log('<div class="alertMessage"><img src="../../assets/images/icons/favicon.ico"> Welcome ' + loggedInUser + '</div>');
    }, 200);
  };

  init();

  // init object from Arduino (mockup object)
  const arduinoObject = {
    temp: 73,
    rpm: 18,
    video: 'null',
    light: 'ON',
    light_RGB: 'rgb(255, 255, 255)',
    vacuum: 'OFF',
    fan: 'OFF'
  }

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
