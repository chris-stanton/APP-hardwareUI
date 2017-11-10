myApp.controller('TempController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('TempController running...');

  // defining this
  const self = this;

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // init status message
  self.status = 'Searching for Temp Status...';


  // range state change listener
  self.tempChange = (uistatus) => {
    if(uistatus <= 69) {
      self.status = 'Temp is to LOW';
    } else if(uistatus > 69 && uistatus < 80) {
      self.status = 'Temp is OPTIMAL';
    } else if(uistatus >= 80) {
      self.status = 'Temp is to HIGH';
    } else {
      console.log("Error finding TEMP status");
      alertify.error("Error finding TEMP status");
    }

  };









}]); // end controller code block
