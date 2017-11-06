myApp.controller('TempController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('TempController running...');

  const self = this;

  self.message = 'TempController';

  // radio listener
  self.tempChange = (uistatus) => {
    if(uistatus <= 69) {
      self.status = 'Temp is to LOW';
    } else if(uistatus > 69 && uistatus < 80) {
      self.status = 'Temp is OPTIMAL';
    } else if(uistatus >= 80) {
      self.status = 'Temp is to HIGH';
    } else {
      alertify.error("Error finding status");
    }
  };










}]); // end controller code block
