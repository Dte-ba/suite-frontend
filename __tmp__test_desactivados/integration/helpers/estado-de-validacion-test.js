
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('estado-de-validacion', 'helper:estado-de-validacion', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{estado-de-validacion inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

