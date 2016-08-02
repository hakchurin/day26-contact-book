import $ from 'jquery';
import Backbone from 'backbone';
import loginInfo from './login';
import DisplayContact from './displayContact';
import signUpInfo from './signUp';
import renderContacts from './uploadContact';
import contactCollection from './contactCollections';
import settings from './settings';
import ContactInfo from './contact';

import HeaderView from './Nav';


const Router = Backbone.Router.extend({
  routes: {
      login: 'loginFunction',
      contact: 'contactFunction',
      signUp: 'signupFunction',
      contactModel: 'contactModelFunction',
      uploadContact: 'uploadContactFunction',
      '/*': 'login'
  },
  loginFunction: function() {
    let headerView = new HeaderView();
    headerView.render()

      $('.login').empty().append(headerView.$el).append(loginInfo)
      $('.contact').empty();
      $('.signUp').empty();
  },
  contactFunction: function() {
    let headerView = new HeaderView();
    headerView.render()
      $('.contact').append(headerView.$el).append(ContactInfo);
      $('.login').empty();
      $('.signUp').empty();
  },
  signupFunction: function() {
    let headerView = new HeaderView();
    headerView.render();
      $('.signUp').empty().append(headerView.$el).append(signUpInfo);
      $('.login').empty();
      $('.contact').empty();

      console.log('hi');
  },
  contactModelFunction: function() {
    contactInfo.fetch({
        headers: {
            Authorization: 'Kinvey' + session.authtoken
        }
    });
    let contactStorage = contact(contactInfo);
    $('.contact').empty().append(contactInfo);
  },
  uploadContactFunction: function(){
  contactCollection.fetch ({
      success: function() {
          renderContacts();
      }, error: function(response) {
      }});
  },
  newContact : function() {
    let contactForm = renderContactForm();
    contactList.append(contactForm);
  }
});





const router = new Router();
export default router;
