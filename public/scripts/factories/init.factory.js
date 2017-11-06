
myApp.factory('InitFactory',['$http', '$location', 'alertify', function($http, $location, alertify) {

  console.log('InitFactory running...');

  alertify.success("Welcome Chris!");

// init object from Arduino (mockup object)
  const arduinoObject = {
    temp: 73,
    rpm: 18,
    video: 'null',
    light: 'ON',
    vacuum: 'OFF',
    fan: 'LOW'
  }





// public API
  return {
    // init object from arduino
    arduinoObject : arduinoObject
  }

}]);
