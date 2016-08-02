import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import settings from './settings';
import session from './session';
import HeaderView from './Nav';





function loginInfo() {
    let login = $(`
    <form class="username">
    <h3>Username</h3>
    <input type="text" name="title" class="username" placeholder="Username">
    <h3> Password</h3>
    <input type="text" name="title" class="password" placeholder="Password">
    <p>
    <input type="submit" class="submit" name="submit" value="submit">
    </p>
    </form>

  `);
    login.find('input[type="submit"]').on('click', function(evt) {
        evt.preventDefault();
        let username = login.find('.username').val();
        let password = login.find('.password').val();
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
                session.username = username;
                session.authtoken = response._kmd.authtoken;
                router.navigate('contact', {trigger:true});
            },
            error: function(response) {
            }
        });
    });
    return login;

}
export default loginInfo;
