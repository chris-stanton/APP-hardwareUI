myApp.controller('TempController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('TempController running...');

  // defining this
  const self = this;

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;


  // radio state change listener
  self.tempChange = (uistatus) => {
    if(uistatus <= 69) {
      self.status = 'Temp is to LOW';
      if(uistatus === 69) {
        alertify.error("Temp is to LOW");
      } else {
        return
      };
    } else if(uistatus > 69 && uistatus < 80) {
      self.status = 'Temp is OPTIMAL';
    } else if(uistatus >= 80) {
      self.status = 'Temp is to HIGH';
      if(uistatus === 80) {
        alertify.error("Temp is to HIGH");
      } else {
        return
      };
    } else {
      alertify.error("Error finding TEMP status");
    };

  };









}]); // end controller code block
