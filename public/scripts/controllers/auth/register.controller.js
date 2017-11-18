
myApp.controller('RegisterController', ['InitFactory', '$location', '$http', function(InitFactory, $location, $http) {
    console.log('RegisterController Running...');

      const self = this;

// setting user variable to empty string on init
    self.user = {
      username: '',
      password: '',
      email: ''
    };
// setting message to empty string on init
    self.message = '';

// button click to add new user to DB
      self.addNewUser = function(user) {
        console.log('user', user);
        if(user.username === '' || user.password === '' || user.email === '') {
          self.message = "Missing Registration Credentials";
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
