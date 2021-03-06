myApp.controller('FanController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('FanController running...');

  const self = this;

  self.message = 'FanController';

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // Radio button listener to check footer status
  self.fanChange = (uistatus) => {
    console.log('button click ', uistatus);
    if(uistatus === 'ON') {
      self.status = 'Fan ON';
    } else if(uistatus === 'OFF') {
      self.status = 'Fan OFF';
    } else {
      self.status = 'Error finding FAN status';
      alertify.error("Error finding FAN status");
      console.log("Error finding FAN status");
    }
  }

  // gets footer status on init
  let uistatus = self.uistatus.fan;
  self.fanChange(uistatus);












}]); // end controller code block
