import Ember from 'ember';
import ENV from '../config/environment';

const MIRAGE_ENABLED = ENV['usingMirage'];

export default Ember.Component.extend({
  classNames: ["ui", "fixed", "menu", "inverted", "barra-de-navegacion"],
  usandoMirage: MIRAGE_ENABLED,

  actions: {
    toggle: function(id) {
      $(`#${id}`).sidebar('toggle');
    }
  }
});
