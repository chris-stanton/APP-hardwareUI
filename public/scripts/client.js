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
          templateUrl: './views/temp.html',
          controller: 'TempController',
          controllerAs: 'tc'
        })
        .when ('/rpm', {
          templateUrl: './views/rpm.html',
          controller: 'RpmController',
          controllerAs: 'rc'
        })
        .when ('/video', {
          templateUrl: './views/video.html',
          controller: 'VideoController',
          controllerAs: 'vc'
        })
        .when ('/light', {
          templateUrl: './views/light.html',
          controller: 'LightController',
          controllerAs: 'lc'
        })
        .when ('/vacuum', {
          templateUrl: './views/vacuum.html',
          controller: 'VacuumController',
          controllerAs: 'vac'
        })
        .when ('/fan', {
          templateUrl: './views/fan.html',
          controller: 'FanController',
          controllerAs: 'fc'
        })
        .otherwise ( {
            redirectTo: '/dashboard'
        });
}]);
