myApp.controller('LightController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('LightController running...');

  const self = this;

  self.message = 'LightController';

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // init status message
  self.status = 'Searching for Temp Status...';

  // Radio button listener
  self.lightChange = (uistatus) => {
console.log('button');
    if(uistatus === 'ON') {
      self.status = 'Light ON'
    } else if(uistatus === 'OFF') {
      self.status = 'Light OFF'
    } else {
      console.log("Error finding LIGHT status");
      alertify.error("Error finding LIGHT status");
    }

  };










}]); // end controller code block
