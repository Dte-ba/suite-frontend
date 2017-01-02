import Ember from 'ember';

export default Ember.Component.extend({
  tagElement: 'a',
  classNames: ['item', 'suite-usuario'],

  didInsertElement() {
    this.$()
      .popup({
        popup: $('.popup'),
        on: 'click',
      });
  }
});
