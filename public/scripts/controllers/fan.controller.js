myApp.controller('FanController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('FanController running...');

  const self = this;

  self.message = 'FanController';

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // init status message
  self.status = 'Searching for Fan Status...';

  // Radio button listener
  self.fanChange = (uistatus) => {
    if(uistatus === 'ON') {
      self.status = 'Fan ON'
    } else if(uistatus === 'OFF') {
      self.status = 'Fan OFF'
    } else {
      console.log("Error finding FAN status");
      alertify.error("Error finding FAN status");
    }
  };












}]); // end controller code block
