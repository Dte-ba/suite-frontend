import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-formularios/escuela', 'Integration | Component | suite formularios/escuela', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-formularios/escuela}}`);
  assert.ok(this.$().text());
});
