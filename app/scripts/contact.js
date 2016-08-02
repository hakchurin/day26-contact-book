import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import ContactInfo from './contactModel';
import contacts from './contactCollections';
import session from './session';
import loginInfo from './login';
import signUpInfo from './signUp';
import settings from './settings';
import Contacts from './contactCollections';

function contactInfo() {
    let $contact = $(`
      <div id ="contactPage">
      <h1> Contacts </h1>
        <form class="fullName">
          <h3>Full Name</h3>
          <input type="text" name="title" id="fullName" placeholder="full Name">
          <h3> Nickname</h3>
          <input type="text" name="title" class="nickname" placeholder="Nickname">
          <h3> Email Address</h3>
          <input type="text" name="title" class="email" placeholder="Email Address">
          <h3> Phone Number</h3>
          <input type="text" name="title" class="phoneNumber" placeholder="Phone Number">
          <p id="btn">
          <input type="submit" class="btnSubmit" name="submit" value="submit">
          </p>
        </form>
        <ul id="contactList">
        </ul>
    </div>

  `);
  console.log(Contacts);
  // Contacts.fetch()
  Contacts.on('change', function() {
    $contact.find('#contactList').empty()
    Contacts.fetch({
        success: function() {
        console.log('SUCCESS');
        Contacts.each(function(contact) {
          console.log('CONTACT: ', contact);
          let $contactLi = $(`<li><h3>${contact.get('name')} </h3></li>`);
                $contact.find('#contactList').append($contactLi);
        });
      }, error: function() {
        console.log('ERROR');
      }
    })
  })
  Contacts.fetch({
      success: function() {
      console.log('SUCCESS');
      Contacts.each(function(contact) {
        console.log('CONTACT: ', contact);
        let $contactLi = $(`<li><h3>${contact.get('name')} </h3></li>`);
              $contact.find('#contactList').append($contactLi);
      });
    }, error: function() {
      console.log('ERROR');
    }
  })

    $contact.find('input[type="submit"]').on('click', function(evt) {
      console.log(Contacts);
        evt.preventDefault();

        Contacts.create({
          name: $('#fullName').val(),
          nickname: $('.nickname').val(),
          email: $('.email').val(),
          phone: $('.phoneNumber').val()
        })
        // let $newContactLi = $(`<li><h3>${$contact.find('.fullName').val()} </h3></li>`);
        // $contact.find('#contactList').append($newContactLi);
  });


    $('.contact').append($contact);
    return $contact;
}
export default contactInfo;
