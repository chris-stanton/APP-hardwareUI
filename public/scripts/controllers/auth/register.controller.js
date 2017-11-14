
myApp.controller('RegisterController', ['InitFactory', '$location', '$http', function(InitFactory, $location, $http) {
    console.log('RegisterController Running...');

      const self = this;

// button click to add new user to DB
      self.addNewUser = function(user) {
        console.log('user', user);
        if(self.user.username === '' || self.user.password === '') {
          self.error = "Missing Credentials! Please try again";
        } else {
          console.log('sending user credentials to server...', self.user);
          $http.post('/register', self.user).then(function(response) {
            console.log('registering user success');
            $location.path('/dashboard');
          }).catch(function(response) {
            console.log('error registering user');
            self.error = "Please try again."
          })
        }
      }; // end addNewUser()


    }]); // end controller code block
