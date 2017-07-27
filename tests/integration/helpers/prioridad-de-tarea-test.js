
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('prioridad-de-tarea', 'helper:prioridad-de-tarea', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{prioridad-de-tarea inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

