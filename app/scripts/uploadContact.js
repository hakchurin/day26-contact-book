import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import ContactInfo from './contactModel';
import Contacts from './contactcollections';
import session from './session';
import loginInfo from './login';
import signUpInfo from './signUp';





function renderContacts() {
    let $contacts = $(`
      <ul id = "contacts-list">
      <li> ${settings.appId}</li>
      </ul>
    `);

    contactCollection.each(function(contact) {
      let $contactLi = $(`<li><h3>${contact.get('name')} </h3></li>`);
              $contacts.append($contactLi);
      });
    return $contacts;
}

export default renderContacts;


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
