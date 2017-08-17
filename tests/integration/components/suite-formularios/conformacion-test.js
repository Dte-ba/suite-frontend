import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-formularios/conformacion', 'Integration | Component | suite formularios/conformacion', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-formularios/conformacion}}`);
  assert.ok(this.$().text());
});
