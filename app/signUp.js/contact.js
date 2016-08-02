import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';







function contactInfo() {
    let contact = $(`
    <form class="fullName">
    <h3>Full Name</h3>
    <input type="text" name="title" class="fullName" placeholder="full Name">
    </form>
    <form class ="nickname">
    <h3> Nickname</h3>
    <input type="text" name="title" class="nickname" placeholder="Nickname">
    </form>
    <form class ="emailAddress">
    <h3> Nickname</h3>
    <input type="text" name="title" class="email" placeholder="Email Address">
    </form>
    <form class ="phoneNumber">
    <h3> Phone Number</h3>
    <input type="text" name="title" class="phoneNumber" placeholder="Phone Number">
    </form>
    <input type="submit" class="submit" name="submit" value="submit">
  `);
    contact.find('input[type="submit"]').on('click', function(evt) {
        evt.preventDefault();
        var userInfo = new UserInfo({
            name: $('.fullName').val(),
            nickname: $('.nickname').val(),
            email: $('.emailAddress').val(),
            phone: $('.phoneNumber').val()
        });
        userInfo.save();

    });
    $('.contact').append(contact);
    return contact;
}
export default contactInfo;
