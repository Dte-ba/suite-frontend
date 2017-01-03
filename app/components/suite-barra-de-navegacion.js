import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["ui", "fixed", "menu", "inverted"],

  actions: {
    mostrarMenuLateral() {
      this.$('.ui.sidebar').sidebar('toggle');
    }
  }
});
