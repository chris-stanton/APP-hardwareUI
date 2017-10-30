myApp.controller('MainController',['FactoryFactory', 'alertify', function(FactoryFactory, alertify) {

  console.log('MainController running...');

  const self = this;

  self.message = 'angular sourced';

  alertify.success("Welcome Chris!");










}]); // end controller code block
