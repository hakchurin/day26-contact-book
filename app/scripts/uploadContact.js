import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import ContactInfo from './contactModel';
import Contacts from './contactCollections';
import session from './session';
import loginInfo from './login';
import signUpInfo from './signUp';



function newContact(){
  let $newContact = $(`
    <main>
    <form class="newContactForm">
    <input id="#fullname" type="text" name="fullname" placeholder="fullname">
<input id="#nickname" type="text" name="nickname" placeholder="nickname">
<input id="#email" type="text" name="email" placeholder="email">
<input id="#phone" type="text" name="phone" placeholder="phone">
<button id="clear">clear</button>
<button id="cancel">cancel</button>
<button id="new">add new</button>
</form>
</main>
    `);
    $newContact.find('#new').on('click', function(evt){
      evt.preventDefault();
      Contacts.create({
        fullname: $newContact.find('input[name="fullname"]').val(),
        nickname: $newContact.find('input[name="nickname"]').val(),
        email: $newContact.find('input[name="email"]').val(),
        phone: $newContact.find('input[name="phone"]').val(),
      },{
        success: function(response){
          router.navigate('contacts',{trigger:true});
        },
        error: function(){
          console.log('you suck');
        }

      });
    });
  return $newContact;
}

export default newContact;



// function renderContacts() {
//     let $contacts = $(`
//       <ul id = "contacts-list">
//       <li> ${settings.appId}</li>
//       </ul>
//     `);
//
//     contactCollection.each(function(contact) {
//       let $contactLi = $(`<li><h3>${contact.get('name')} </h3></li>`);
//               $contacts.append($contactLi);
//       });
//     return $contacts;
// }
//
// export default renderContacts;


//
// function renderMenu(menu) {
//     let $menuItem = $(`
//       <li class="Menu-Item">
//         <h3> ${menu.item}</h3>
//         <p class="menu-price">${menu.price}</p>
//
//         <p class="menu-descpription"> ${menu.description}</p>
//         <button class = "add-to-order"> Order </button>
//       </li>
//       `);
//
//       $menuItem.find('.add-to-order').on('click', function(){
//         order.addItem(menu);
//       });
//
//
//       order.on('items',function(){
//           let $entireOrder = renderEntireOrder();
//           $('.sideMenu').empty().append($entireOrder);
//       });
//
//     return $menuItem;
