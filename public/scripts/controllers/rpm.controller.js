myApp.controller('RpmController',['InitFactory', '$location', 'alertify', function(InitFactory, alertify, $location) {

  console.log('RpmController running...');

  // defining this
  const self = this;

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // radio state change listener to get footer status
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
      console.log("Error finding RPM status");
      alertify.error("Error finding RPM status");
    }
  }

  // gets footer status on init
  let uistatus = self.uistatus.rpm;
  self.rpmChange(uistatus);







}]); // end controller code block
