import Backbone from 'backbone';
import $ from 'jquery';
import router from './router';





const DisplayContact = Backbone.View.extend({
    tagName: 'div',
    template: function(){
      return `
          <h1>Contacts </h1>
          <ul id= "uploadedContacts">
          </ul>
          `;
    },
    render: function(){
      console.log('rendering contact');
      this.$el.append(this.template());
    }


  });


  export default DisplayContact;
