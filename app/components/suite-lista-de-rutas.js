import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  didInsertElement() {
    $("#sub-sidebar a").off('click');

    $("#sub-sidebar a").on('click', function(e) {
      $('#sub-sidebar').sidebar('hide');
    });
  }
});
