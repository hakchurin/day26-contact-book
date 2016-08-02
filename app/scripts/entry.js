import $ from 'jquery';
import Backbone from 'backbone';
import routerPage from './router';
import session from './session';
import settings from './settings';

Backbone.history.start();


$(document).ajaxSend(function(e, xhrAjax, jqueryAjax) {
  console.log('intercepting');
  if (session.authtoken) {
    console.log('session auth');
    xhrAjax.setRequestHeader('Authorization', `Kinvey ${session.authtoken}`);
  } else {
    console.log('basic');
    xhrAjax.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`);
  }
});
