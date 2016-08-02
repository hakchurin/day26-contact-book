import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import settings from './settings';
import session from './session';




function signUpInfo() {
    let signUp = $(`
    <form class="username">
      <h1>Sign Up </h1>
      <h3>Username</h3>
      <input type="text" name="title" class="username" placeholder="Username">
      <h3> Password</h3>
      <input type="text" name="title" class="password" placeholder="Password">
      <input type="submit" class="submit" name="submit" value="submit">
    </form>

  `);
    signUp.find('input[type="submit"]').on('click', function(evt) {
      console.log('hi');
        evt.preventDefault();
        let username = signUp.find('.username').val();
        let password = signUp.find('.password').val();
        //var encrypted = btoa(settings.appId + ':' + settings.appSecret);

        $.ajax({
            type: 'POST',
            url: `${settings.baseUrl}/user/${settings.appId}`,
            data: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                Authorization: `Basic ${settings.basicAuth}`
            },
            contentType: 'application/json',
            success: function(response) {
                session.username = username;
                session.authtoken = response._kmd.authtoken;
                location.hash = 'contact';

            },
        });
    });
    console.log(signUpInfo);
    return signUp;

}
export default signUpInfo;
