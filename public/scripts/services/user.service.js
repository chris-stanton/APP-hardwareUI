
myApp.factory('UserService', function($http, $location, alertify){

  console.log('UserService Running...');

  var userObject = {};

  return {
    userObject : userObject,

    // checks user auth when switching views
    getuser : function(){
      console.log('UserService -- getuser');
      $http.get('/user').then(function(response) {
          if(response.data.username) {
            console.log('searching DB for userName: ', response.data.username);
              // user info that has a current session on the server
              userObject.userName = response.data.username;
              userObject.user_id = response.data.user_id;
              console.log('SUCCESSFULL LOGIN, found username: ', userObject.userName);
              alertify.success(userObject.userName + ' Logged in!');
          } else {
              console.log('getuser -- failure');
              // user has no session, bouncing them back to the login page
              $location.path("/login");
          }
      },function(response){
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/login");
      });
    },

    // logs user out of session
    logout : function() {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function(response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/login");
      });
    }
  };
});
