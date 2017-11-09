
myApp.controller('DashboardController',['InitFactory', 'alertify', function(InitFactory, alertify) {

  console.log('DashboardController running...');

  const self = this;

  self.message = 'angular sourced';

  // init data from arduino (data being sent form factory)
  self.arduinoObject = InitFactory.arduinoObject;












}]); // end controller code block
