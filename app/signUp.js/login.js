import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import settings from './settings';





function loginInfo() {
    let login = $(`
    <form class="username">
    <h3>Username</h3>
    <input type="text" name="title" class="username" placeholder="Username">
    </form>
    <form class ="password">
    <h3> Password</h3>
    <input type="text" name="title" class="password" placeholder="Password">
    </form>
    <input type="submit" class="submit" name="submit" value="submit">
  `);
    login.find('input[type="submit"]').on('click', function(evt) {
        evt.preventDefault();
        let username = $login.find('#username').val();
        let password = $login.find('#password').val();
        var encrypted = btoa(settings.appId + ':' + settings.appSecret);

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
        });
    });
    console.log(loginInfo);
    return login;

}
export default loginInfo;
