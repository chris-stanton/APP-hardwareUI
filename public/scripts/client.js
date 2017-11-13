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
          templateUrl: './views/subs/temp.html',
          controller: 'TempController',
          controllerAs: 'tc'
        })
        .when ('/rpm', {
          templateUrl: './views/subs/rpm.html',
          controller: 'RpmController',
          controllerAs: 'rc'
        })
        .when ('/video', {
          templateUrl: './views/subs/video.html',
          controller: 'VideoController',
          controllerAs: 'vc'
        })
        .when ('/light', {
          templateUrl: './views/subs/light.html',
          controller: 'LightController',
          controllerAs: 'lc'
        })
        .when ('/vacuum', {
          templateUrl: './views/subs/vacuum.html',
          controller: 'VacuumController',
          controllerAs: 'vac'
        })
        .when ('/fan', {
          templateUrl: './views/subs/fan.html',
          controller: 'FanController',
          controllerAs: 'fc'
        })
        .otherwise ( {
            redirectTo: '/dashboard'
        });
}]);
