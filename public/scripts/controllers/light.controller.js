myApp.controller('LightController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('LightController running...');

  const self = this;

  self.message = 'LightController';

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // Radio button listener to get footer status
  self.lightChange = (uistatus) => {
    if(uistatus === 'ON') {
      self.status = 'Light ON'
    } else if(uistatus === 'OFF') {
      self.status = 'Light OFF'
    } else {
      console.log("Error finding LIGHT status");
      alertify.error("Error finding LIGHT status");
    }
  }

  // gets footer status on init
  let uistatus = self.uistatus.light;
  self.lightChange(uistatus);










}]); // end controller code block
