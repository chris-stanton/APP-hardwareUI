
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
          userObject.email = response.data.email;
          console.log('User ' + userObject.userName + ' Logged in success');
        } else {
          // user has no session, bouncing them back to the login page
          $location.path("/login");
          console.log('error finding user');
        }
      },(response) => {
        $location.path("/login");
        console.log('getuser error: ', response);
      });
    },

    // logs user out of session
    logout : () => {
      $http.get('/user/logout').then((response) => {
        // alertify logged out message
        setTimeout(function() {
          alertify.logPosition('top right');
          alertify.log('<div class="alertMessage"><img src="../../assets/images/icons/favicon.ico">' + userObject.userName  + ' logged out</div>');
        }, 200);
        $location.path("/login");
        console.log(userObject.userName + ' Logged out');
      });
    }

  }; //end return
}); //end myApp
