
myApp.controller('DashboardController',['InitFactory', 'alertify', function(InitFactory, alertify) {

  console.log('DashboardController running...');

  const self = this;

  self.message = 'angular sourced';

  // init data from arduino (data being sent form factory)
  self.arduinoObject = InitFactory.arduinoObject;

  // checks for 0 rpms and if, then displays OFF
  if(self.arduinoObject.rpm === 0) {
    self.RPMMessage = 'OFF';
  } else if(self.arduinoObject.rpm !== 0) {
    self.RPMMessage = self.arduinoObject.rpm;
  } else {
    console.log("Error checking RPM DASHBOARD status");
    alertify.error("Error checking RPM DASHBOARD status");
  }










}]); // end controller code block
