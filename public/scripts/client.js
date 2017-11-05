var myApp = angular.module('myApp', ['ngRoute', 'ngAlertify']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/dashboard', {
          templateUrl: './views/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'dbc'
        })
        .otherwise ( {
            redirectTo: '/dashboard'
        });
}]);
