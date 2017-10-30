var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/main', {
          templateUrl: '/views/main-view.html',
          controller: 'MainController',
          controllerAs: 'mc'
        })
        .otherwise ( {
            redirectTo: '/main'
        });
}]);
