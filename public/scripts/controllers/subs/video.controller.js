myApp.controller('VideoController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('VideoController running...');

  const self = this;

  self.message = 'VideoController';

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;
  // init aurduino connection data from arduino
  self.uiconnection = InitFactory.arduinoConnection;











}]); // end controller code block
