
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('estado-de-evento', 'helper:estado-de-evento', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{estado-de-evento inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

