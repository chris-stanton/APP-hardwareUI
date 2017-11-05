var myApp = angular.module('myApp', ['ngRoute', 'ngAlertify']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/dashboard', {
          templateUrl: './views/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'dbc'
        })
        .when ('/temp', {
          templateUrl: './views/templates/temp.html',
          controller: 'TempController',
          controllerAs: 'tc'
        })
        .when ('/rpm', {
          templateUrl: './views/templates/rpm.html',
          controller: 'RpmController',
          controllerAs: 'rc'
        })
        .when ('/video', {
          templateUrl: './views/templates/video.html',
          controller: 'VideoController',
          controllerAs: 'vc'
        })
        .when ('/light', {
          templateUrl: './views/templates/light.html',
          controller: 'LightController',
          controllerAs: 'lc'
        })
        .when ('/fan', {
          templateUrl: './views/templates/fan.html',
          controller: 'FanController',
          controllerAs: 'fc'
        })
        .otherwise ( {
            redirectTo: '/dashboard'
        });
}]);
