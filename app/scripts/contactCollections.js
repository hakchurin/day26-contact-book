import Backbone from 'backbone';
import Contact from './contactModel';
import settings from './settings';

console.log('model: ', Contact);

const Contacts = Backbone.Collection.extend({
  model: Contact,
  url: `https://baas.kinvey.com/appdata/${settings.appId}/contacts`
});

let contacts = new Contacts();

export default contacts;
