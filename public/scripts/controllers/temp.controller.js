myApp.controller('TempController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('TempController running...');

  // defining this
  const self = this;

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // range state change listener for footer status
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

  // gets footer status on init
  let uistatus = self.uistatus.temp;
  self.tempChange(uistatus);









}]); // end controller code block
