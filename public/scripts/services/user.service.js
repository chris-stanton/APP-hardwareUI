
myApp.factory('UserService', function($http, $location, alertify){

  console.log('UserService Running...');

  const userObject = {};

  return {
    userObject : userObject,

    // checks user auth when switching views
    getuser : () => {
      $http.get('/user').then((response) => {
        if(response.data.username) {
          // user info that has a current session on the server
          userObject.userName = response.data.username;
          userObject.user_id = response.data.user_id;
          alertify.success("Welcome " + userObject.userName);
          console.log(userObject.userName + 'Logged in success');
        } else {
          // user has no session, bouncing them back to the login page
          $location.path("/login");
          console.log('getuser error');
        }
      },(response) => {
        $location.path("/login");
        console.log('getuser error: ', response);
      });
    },

    // logs user out of session
    logout : () => {
      $http.get('/user/logout').then((response) => {
        $location.path("/login");
        console.log('Logged out');
      });
    }

  }; //end return
}); //end myApp
