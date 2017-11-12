
myApp.factory('InitFactory',['$http', '$location', 'alertify', function($http, $location, alertify) {

  console.log('InitFactory running...');

  // init alert message NOTE(need this to be username from DB)
  alertify.success("Welcome Chris!");

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








  // public API
  return {
    // init object from arduino
    arduinoObject : arduinoObject
  }

}]); // end myAPP
