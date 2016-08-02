
import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import login from './login';


$.ajax({
  type: 'POST',
  url: `https://baas.kinvey.com/user/${settings.appId}/login`,
  data: JSON.stringify({
    username: username,
    password: password
  }),
  headers: {
    Authorization: `Basic ${encrypted}`
  },
  contentType: 'application/json',
  success: function(response) {
    user.username = username;
    user.authtoken = response._kmd.authtoken;
    location.hash = 'login';

  },
  error: function() {
    console.log('it errored, you did not make a user');
  }
});

});
