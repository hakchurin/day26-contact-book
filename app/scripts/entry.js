import $ from 'jquery';
import Backbone from 'backbone';
import routerPage from './router';
import session from './session';
import settings from './settings';

Backbone.history.start();


$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  console.log('intercepting');
  if (session.authtoken) {
    xhrAjax.setRequestHeader('Authorization', `Kinvey ${session.authtoken}`);
  } else {
    console.log('basic');
    xhrAjax.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`);
  }
});

// if (sessionStorage.session){
//   session.username= JSON.parse(sessionStorage.session).username;
//   session.authtoken= JSON.parse(sessionStorage.session).authtoken;
//
// }
