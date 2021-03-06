myApp.controller('LightController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('LightController running...');

  const self = this;

  self.message = 'LightController';

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // Radio button listener to check footer status
  self.lightChange = (uistatus) => {
    if(uistatus === 'ON') {
      self.status = 'Lights ON';
    } else if(uistatus === 'OFF') {
      self.status = 'Lights OFF';
    } else {
      self.status = 'Error finding LIGHT status';
      alertify.error("Error finding LIGHT status");
      console.log("Error finding LIGHT status");
    }
  }

  // gets footer status on init
  let uistatus = self.uistatus.light;
  self.lightChange(uistatus);










}]); // end controller code block
