var myApp = angular.module('myApp', ['ngRoute', 'ngAlertify']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  // $locationProvider.hashPrefix('');

  //routes
    $routeProvider
        .when ('/login', {
          templateUrl: './views/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        })
        .when ('/register', {
          templateUrl: './views/auth/register.html',
          controller: 'RegisterController',
          controllerAs: 'reg'
        })
        .when ('/dashboard', {
          templateUrl: './views/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'dbc',
          resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/temp', {
          templateUrl: './views/subs/temp.html',
          controller: 'TempController',
          controllerAs: 'tc',
          resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/rpm', {
          templateUrl: './views/subs/rpm.html',
          controller: 'RpmController',
          controllerAs: 'rc',
          resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/video', {
          templateUrl: './views/subs/video.html',
          controller: 'VideoController',
          controllerAs: 'vc',
          resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/light', {
          templateUrl: './views/subs/light.html',
          controller: 'LightController',
          controllerAs: 'lc',
          resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/vacuum', {
          templateUrl: './views/subs/vacuum.html',
          controller: 'VacuumController',
          controllerAs: 'vac',
          resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/fan', {
          templateUrl: './views/subs/fan.html',
          controller: 'FanController',
          controllerAs: 'fc',
          resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .otherwise ( {
            redirectTo: '/login'
        });
        
}]);
