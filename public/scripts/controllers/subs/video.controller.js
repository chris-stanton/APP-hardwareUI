myApp.controller('VideoController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('VideoController running...');

  const self = this;

  self.message = 'VideoController';

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;











}]); // end controller code block
