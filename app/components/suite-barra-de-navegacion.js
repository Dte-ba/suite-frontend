import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["ui", "fixed", "menu", "inverted"],
  actions: {
    toggle: function(id) {
      $(`#${id}`).sidebar('toggle');
    }
  }
});
