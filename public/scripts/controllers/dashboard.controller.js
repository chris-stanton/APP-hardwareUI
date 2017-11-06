myApp.controller('DashboardController',['InitFactory', 'alertify', function(InitFactory, alertify) {

  console.log('DashboardController running...');

  const self = this;

  self.message = 'angular sourced';

  // init data from arduino
  self.arduinoObject = InitFactory.arduinoObject;












}]); // end controller code block
