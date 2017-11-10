myApp.controller('VacuumController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('VacuumController running...');

  const self = this;

  self.message = 'VacuumController';

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // init status message
  self.status = 'Searching for Vacuum Status...';

  // Radio button listener
  self.vacuumChange = (uistatus) => {

    if(uistatus === 'ON') {
      self.status = 'Vacuum ON'
    } else if(uistatus === 'OFF') {
      self.status = 'Vacuum OFF'
    } else {
      console.log("Error finding VACUUM status");
      alertify.error("Error finding VACUUM status");
    }

  };







}]); // end controller code block
