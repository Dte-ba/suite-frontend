import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['item', 'suite-usuario'],

  didInsertElement() {
    this.$()
      .popup({
        popup: '.popup',
        on: 'click',
        closeable: true,
      });
  }
});
