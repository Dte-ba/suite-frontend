import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let container = this.$('.suite-planilla')[0];
    let data = this.get('datos');
    new Handsontable(container, {
      data: data,
      rowHeaders: true,
      colHeaders: true
    });
  }
});
