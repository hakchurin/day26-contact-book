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



//
//
//
// function renderContacts(){
//   let $contactList = $(`
//     <div id="contacts">
//     <main>
//     <ul id="lisOfContatcts">
//     </ul>
//     </main>
//     </div>
//     `);
//
//     function renderSingleContact (contact){
//       let $liContact= $(`
//         <li id="li">
//         <h3 id="contactTitle"> "${contact.get('fullname')}"</h3>
//         <ul id="ul">
//         <li id="contactNickname"> "${contact.get('nicknmae')}"</h3>
//         <li> ${contact.get('email')}</li>
//         <li> ${contact.get('phone')}</li>
//         </ul>
//         </li>
//         `);
//
//         $contactList.find('#ul').append($liContact);
//         $liContact.find('h3').on('click', function(evt){
//           evt.preventDefault();
//         });
//     }
//
//     Contacts.on('add', renderSingleContact);
//     Contacts.forEach(renderSingleContact);
//
//     return $contactList;
// }
//
// export default renderContacts;
//
// //
// //
// //
//
//


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

  Contacts.on('change', function() {
    $contact.find('#contactList').empty()
    Contacts.fetch({
        success: function() {
        Contacts.each(function(contact) {

          let $contactLi = $(`<li><h3>${contact.get('name')} ${contact.get('email')} </h3></li>`);
          $contact.find('#contactList').append($contactLi);

        });
      }, error: function() {
      }
    })
  })

  Contacts.fetch({
      success: function() {
      Contacts.each(function(contact) {
        let $contactLi = $(`<li class="hidden"><h3>${contact.get('name')}</h3><h3 class="email">${contact.get('email')}</h3><h3 class="phone">${contact.get('phone')}</h3></li>`);
              $contact.find('#contactList').append($contactLi);

              $contactLi.on('click', function(){
                $contactLi.toggleClass('hidden');
              })


                      // let $contactName= $(`<li>${contact.get('email')}</li>`);
                      // $contact.find('#name').append($contactLi);
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


  });


    $('.contact').append($contact);
    return $contact;
}
export default contactInfo;







  //
  //
  //
  //       <ul id="contactList">
  //       <h3 id="name">"${$contact.get('name')}"</h3>
  //       <div id="dropDown">
  //
  //       <li>${contact.get('phone')}</li>
  //       <li>${contact.get('email')}</li>
  //       </div>
  //     </ul>
  //
  // `);
  // Contacts.on('change', function() {
  //   $contact.find('#contactList').empty()
  //   Contacts.fetch({
  //       success: function() {
  //       Contacts.each(function(contact) {
  //         // let $contactLi = $(`<li><h3>${contact.get('name')}  </h3></li>`);
  //         $contact.find('#contactList').append($contactLi);
  //         $contactLi.find('h3').on('click',function(evt){
  //           evt.preventDefault();
  //           $contactLi.toggleClass('show-dropdownview');
  //         })
  //       });
  //     }, error: function() {
  //     }
  //   })
  // })
