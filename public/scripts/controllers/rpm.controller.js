myApp.controller('RpmController',['InitFactory', '$location', 'alertify', function(InitFactory, alertify, $location) {

  console.log('RpmController running...');

  // defining this
  const self = this;

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // init status message
  self.status = 'Searching for RPM Status...';

  // radio state change listener
  self.rpmChange = (uistatus) => {

    if(uistatus <= 5 && uistatus != 0) {
      self.status = 'RPM is to LOW';
    } else if(uistatus > 5 && uistatus < 22) {
      self.status = 'RPM is OPTIMAL';
    } else if(uistatus >= 22) {
      self.status = 'RPM is to High';
    } else if(uistatus == 0){
      self.status = 'Motor is OFF';
    } else {
      alertify.error("Error finding RPM status");
    };

  };









}]); // end controller code block
