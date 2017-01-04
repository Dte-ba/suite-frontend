import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field'],

  didInsertElement() {
    this.$(".dropdown").dropdown();
  },

  ejemploComoTexto: Ember.computed('ejemplo', function() {
    let ejemplo = this.get('ejemplo');

    if (ejemplo) {
      return `Por ejemplo: ${ejemplo}`;
    } else {
      return "";
    }

  })
});
