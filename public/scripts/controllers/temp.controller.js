myApp.controller('TempController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('TempController running...');

  // defining this
  const self = this;

  // radio state change listener
  self.tempChange = (uistatus) => {

    if(uistatus <= 69) {
      self.status = 'Temp is to LOW';
    } else if(uistatus > 69 && uistatus < 80) {
      self.status = 'Temp is OPTIMAL';
    } else if(uistatus >= 80) {
      self.status = 'Temp is to HIGH';
    } else {
      alertify.error("Error finding TEMP status");
    };

  };










}]); // end controller code block
