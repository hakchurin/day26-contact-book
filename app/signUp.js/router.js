import $ from 'jquery';
import Backbone from 'backbone';
import loginInfo from './login';
import contactInfo from './contact';


console.log('hi');


const Router = Backbone.Router.extend({
    routes: {
        login: 'loginFunction',
        contact: 'contactFunction'
    },
  loginFunction: function() {
        $('.login').append(loginInfo);
        console.log('hi');
    },
    contactFunction: function(){
      $('.contact').append(contactInfo);
    }

});


const router = new Router();
export default router;
