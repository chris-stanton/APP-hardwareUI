myApp.controller('VacuumController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('VacuumController running...');

  const self = this;

  self.message = 'VacuumController';

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // Radio button listener to get footer status
  self.vacuumChange = (uistatus) => {
    if(uistatus === 'ON') {
      self.status = 'Vacuum ON';
    } else if(uistatus === 'OFF') {
      self.status = 'Vacuum OFF';
    } else {
      self.status = 'Error finding VACUUM status';
      alertify.error("Error finding VACUUM status");
      console.log("Error finding VACUUM status");
    }
  }

  // gets footer status on init
  let uistatus = self.uistatus.vacuum;
  self.vacuumChange(uistatus);





}]); // end controller code block
