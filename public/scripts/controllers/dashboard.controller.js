myApp.controller('DashboardController',['FactoryFactory', 'alertify', function(FactoryFactory, alertify) {

  console.log('DashboardController running...');

  const self = this;

  self.message = 'angular sourced';


  function init() {
    alertify.success("Welcome Chris!");
  };













}]); // end controller code block
