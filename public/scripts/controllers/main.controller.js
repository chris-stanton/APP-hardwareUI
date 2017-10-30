myApp.controller('MainController',['FactoryFactory', '$scope', 'alertify', function(FactoryFactory, $scope, alertify) {

  console.log('MainController running...');

  var self = this;

  self.message = 'angular sourced';

  alertify.success("Welcome Chris!");

}]); // end controller code block
