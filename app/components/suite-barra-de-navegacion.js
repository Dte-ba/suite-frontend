import Ember from 'ember';
import ENV from '../config/environment';

const MIRAGE_ENABLED = (ENV['ember-cli-mirage'] && (ENV['ember-cli-mirage'].enabled || ENV['ember-cli-mirage'].usingProxy === false));

export default Ember.Component.extend({
  classNames: ["ui", "fixed", "menu", "inverted"],
  usandoMirage: MIRAGE_ENABLED,

  actions: {
    toggle: function(id) {
      $(`#${id}`).sidebar('toggle');
    }
  }
});
