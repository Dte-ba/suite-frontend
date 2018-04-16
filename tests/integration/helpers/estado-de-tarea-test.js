
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('estado-de-tarea', 'helper:estado-de-tarea', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{estado-de-tarea inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

